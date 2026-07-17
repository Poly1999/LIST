'use client';
import { useState } from 'react';

import Header from '@/components/Header';
import FilterBar from '@/components/FilterBar';
import TaskTable from '@/components/TaskTable';
import AddTaskButton from '@/components/AddTaskButton';
import AddTaskModal from '@/components/AddTaskModal';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className='min-h-screen flex flex-col items-center justify-center p-8'>
      <div className='glass-panel w-full max-w-4xl p-8 flex flex-col gap-9'>
        <Header />
        <FilterBar />
        <TaskTable />
      </div>
      <AddTaskButton onClick={() => setIsModalOpen(true)} />
      <AddTaskModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </main>
  );
}

export default Home;
