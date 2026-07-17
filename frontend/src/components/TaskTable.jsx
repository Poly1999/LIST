import TaskRow from './TaskRow';

function TaskTable() {
  return (
    <div className='task-table-box'>
      <table className='w-full border-collapse'>
        <thead>
          <tr>
            <th className='task-header-cell'>Task</th>
            <th className='task-header-cell'>Description</th>
            <th className='task-header-cell'>Category</th>
            <th className='task-header-cell'>Due date</th>
            <th className='task-header-cell'>Priority</th>
          </tr>
        </thead>
        <tbody>
          <TaskRow />
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
