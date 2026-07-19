'use client';
import { useState } from 'react';

import Header from '@/components/Header';
import FilterBar from '@/components/FilterBar';
import TaskTable from '@/components/TaskTable';
import AddTaskButton from '@/components/AddTaskButton';
import AddTaskModal from '@/components/AddTaskModal';
import { useEffect } from 'react';
import { getTasks, updateTask, deleteTask, createTask } from '@/lib/api';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [status, setStatus] = useState('all');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [prevFilters, setPrevFilters] = useState({
    status,
    category,
    sort,
    search,
  });
  const [addKey, setAddKey] = useState(0);

  function handleAddClick() {
    setEditingTask(null);
    setAddKey(prev => prev + 1);
    setIsModalOpen(true);
  }

  const PAGE_SIZE = 5;

  const totalPages = Math.ceil(tasks.length / PAGE_SIZE);
  const paginatedTasks = tasks.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  if (
    prevFilters.status !== status ||
    prevFilters.category !== category ||
    prevFilters.sort !== sort ||
    prevFilters.search !== search
  ) {
    setPrevFilters({ status, category, sort, search });
    setPage(1);
  }

  useEffect(() => {
    getTasks({ status, category, sort, search }).then(data => setTasks(data));
  }, [status, category, sort, search]);

  function refreshTasks() {
    return getTasks({ status, category, sort, search }).then(data =>
      setTasks(data),
    );
  }

  function handleComplete(id) {
    updateTask(id, { done: true }).then(refreshTasks);
  }

  function handleDelete(id) {
    deleteTask(id).then(() => {
      setTasks(prev => prev.filter(task => task._id !== id));
    });
  }

  function handleEditClick(task) {
    setEditingTask(task);
    setIsModalOpen(true);
  }

  function handleSaveTask(data) {
    const request = editingTask
      ? updateTask(editingTask._id, data)
      : createTask(data);
    request.then(() => {
      refreshTasks();
      setIsModalOpen(false);
    });
  }

  return (
    <main className='min-h-screen flex flex-col items-center justify-center p-8'>
      <div className='glass-panel w-full max-w-4xl p-8 flex flex-col gap-9'>
        <Header />
        <FilterBar
          status={status}
          onStatusChange={setStatus}
          category={category}
          onCategoryChange={setCategory}
          sort={sort}
          onSortChange={setSort}
          search={search}
          onSearchChange={setSearch}
        />
        <TaskTable
          key={page}
          tasks={paginatedTasks}
          onComplete={handleComplete}
          onDelete={handleDelete}
          onEdit={handleEditClick}
        />
        <div className='flex justify-center items-center gap-3 text-white mt-4'>
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className='disabled:opacity-30'
          >
            <ChevronLeft size={20} />
          </button>

          {Array.from({ length: totalPages || 1 }, (_, i) => i + 1).map(num => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={
                num === page ? 'text-xl font-bold' : 'text-base text-white/50'
              }
            >
              {num}
            </button>
          ))}

          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className='disabled:opacity-30'
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <AddTaskButton onClick={handleAddClick} />
      <AddTaskModal
        key={editingTask ? editingTask._id : `new-${addKey}`}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSave={handleSaveTask}
        task={editingTask}
      />
    </main>
  );
}

export default Home;
