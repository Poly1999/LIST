import { Plus } from 'lucide-react';

function AddTaskButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className='group fixed bottom-8 right-8 h-12 rounded-full bg-purple-500 hover:bg-purple-600 shadow-lg flex items-center overflow-hidden px-4 transition-colors duration-300'
    >
      <Plus
        size={24}
        className='text-white shrink-0 w-6 group-hover:w-0 group-hover:opacity-0 overflow-hidden transition-all duration-500 ease-in-out'
        strokeWidth={2.5}
      />
      <span className='w-0 group-hover:w-28 group-hover:ml-2 overflow-hidden whitespace-nowrap text-white text-base font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
        Add new task
      </span>
    </button>
  );
}

export default AddTaskButton;
