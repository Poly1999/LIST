import { Input } from '@/components/ui/input';
import { NativeSelect, NativeSelectOption } from './ui/native-select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';

function FilterBar({
  status,
  onStatusChange,
  category,
  onCategoryChange,
  sort,
  onSortChange,
  search,
  onSearchChange,
}) {
  return (
    <div className='flex justify-between items-center'>
      <div className='relative'>
        <Search
          size={16}
          className='absolute right-3 top-1/2 -translate-y-1/2 text-white/50'
        />
        <Input
          type='text'
          placeholder='Search tasks...'
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          className='h-10 w-65 px-4 rounded-full bg-transparent border border-white text-white placeholder:text-white/50'
        />
      </div>

      <Tabs value={status} onValueChange={onStatusChange}>
        <TabsList variant='line' className='text-white'>
          <TabsTrigger value='all'>All</TabsTrigger>
          <TabsTrigger value='undone'>In Progress</TabsTrigger>
          <TabsTrigger value='done'>Completed</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className='flex gap-5'>
        <NativeSelect
          id='filter-category'
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
          id='filter-priority'
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
