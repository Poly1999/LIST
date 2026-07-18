'use client';
import { useState } from 'react';

import Header from '@/components/Header';
import FilterBar from '@/components/FilterBar';
import TaskTable from '@/components/TaskTable';
import AddTaskButton from '@/components/AddTaskButton';
import AddTaskModal from '@/components/AddTaskModal';
import { useEffect } from 'react';
import { getTasks, updateTask, deleteTask, createTask } from '@/lib/api';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [status, setStatus] = useState('all');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('');

  useEffect(() => {
    getTasks({ status, category, sort }).then(data => setTasks(data));
  }, [status, category, sort]);

  function refreshTasks() {
    return getTasks({ status, category, sort }).then(data => setTasks(data));
  }

  function handleComplete(id) {
    updateTask(id, { done: true }).then(refreshTasks);
  }

  function handleDelete(id) {
    deleteTask(id).then(() => {
      setTasks(prev => prev.filter(task => task._id !== id));
    });
  }

  function handleAddClick() {
    setEditingTask(null);
    setIsModalOpen(true);
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
        />
        <TaskTable
          tasks={tasks}
          onComplete={handleComplete}
          onDelete={handleDelete}
          onEdit={handleEditClick}
        />
      </div>
      <AddTaskButton onClick={handleAddClick} />
      <AddTaskModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSave={handleSaveTask}
        task={editingTask}
      />
    </main>
  );
}

export default Home;
