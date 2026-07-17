import { Pencil, Trash2 } from 'lucide-react';

function TaskRow() {
  return (
    <tr>
      <td className='task-cell'>Buy milk</td>
      <td className='task-cell'>16 oz</td>
      <td className='task-cell'>Shopping</td>
      <td className='task-cell'>20.07</td>
      <td className='task-cell'>5</td>

      <td className='px-2 py-3 flex items-center justify-center gap-3'>
        <input type='checkbox' className='task-checkbox' />
        <Pencil size={16} className='text-white cursor-pointer' />
        <Trash2 size={16} className='text-white cursor-pointer' />
      </td>
    </tr>
  );
}

export default TaskRow;
