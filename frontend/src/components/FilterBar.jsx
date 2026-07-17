function FilterBar() {
  return (
    <div className='flex justify-between'>
      <div className='flex gap-5'>
        <button className='filter-btn'>All</button>
        <button className='filter-btn'>In Progress</button>
        <button className='filter-btn'>Completed</button>
      </div>
      <div className='flex gap-5'>
        <select className='filter-select' defaultValue=''>
          <option value=''>Category</option>
          <option>All</option>
          <option>Personal</option>
          <option>Work</option>
          <option>Household</option>
          <option>Shopping</option>
          <option>Other</option>
        </select>
        <select className='filter-select' defaultValue=''>
          <option value=''>Priority</option>
          <option>No sorting</option>
          <option>High to Low</option>
          <option>Low to High</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
