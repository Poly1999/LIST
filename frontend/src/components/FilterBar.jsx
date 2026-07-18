import { NativeSelect, NativeSelectOption } from './ui/native-select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

function FilterBar({
  status,
  onStatusChange,
  category,
  onCategoryChange,
  sort,
  onSortChange,
}) {
  return (
    <div className='flex justify-between'>
      <Tabs
        defaultValue='overview'
        value={status}
        onValueChange={onStatusChange}
      >
        <TabsList variant='line' className='text-white'>
          <TabsTrigger value='all'>All</TabsTrigger>
          <TabsTrigger value='undone'>In Progress</TabsTrigger>
          <TabsTrigger value='done'>Completed</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className='flex gap-5'>
        <NativeSelect
          defaultValue=''
          value={category}
          onChange={e => onCategoryChange(e.target.value)}
          className='h-10 text-white'
        >
          <NativeSelectOption value=''>Category</NativeSelectOption>
          <NativeSelectOption value='all'>All</NativeSelectOption>
          <NativeSelectOption value='Personal'>Personal</NativeSelectOption>
          <NativeSelectOption value='Work'>Work</NativeSelectOption>
          <NativeSelectOption value='Household'>Household</NativeSelectOption>
          <NativeSelectOption value='Shopping'>Shopping</NativeSelectOption>
          <NativeSelectOption value='Other'>Other</NativeSelectOption>
        </NativeSelect>

        <NativeSelect
          defaultValue=''
          value={sort}
          onChange={e => onSortChange(e.target.value)}
          className='h-10 text-white'
        >
          <NativeSelectOption value=''>Priority</NativeSelectOption>
          <NativeSelectOption value='priority_desc'>
            High to Low
          </NativeSelectOption>
          <NativeSelectOption value='priority_asc'>
            Low to High
          </NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  );
}

export default FilterBar;
