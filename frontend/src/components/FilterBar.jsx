import { NativeSelect, NativeSelectOption } from './ui/native-select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

function FilterBar() {
  return (
    <div className='flex justify-between'>
      <Tabs defaultValue='overview'>
        <TabsList variant='line' className='text-white'>
          <TabsTrigger value='overview'>All</TabsTrigger>
          <TabsTrigger value='analytics'>In Progress</TabsTrigger>
          <TabsTrigger value='reports'>Completed</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className='flex gap-5'>
        <NativeSelect defaultValue='' className='h-10 text-white'>
          <NativeSelectOption value=''>Category</NativeSelectOption>
          <NativeSelectOption value='all'>All</NativeSelectOption>
          <NativeSelectOption value='Personal'>Personal</NativeSelectOption>
          <NativeSelectOption value='Work'>Work</NativeSelectOption>
          <NativeSelectOption value='Household'>Household</NativeSelectOption>
          <NativeSelectOption value='Shopping'>Shopping</NativeSelectOption>
          <NativeSelectOption value='Other'>Other</NativeSelectOption>
        </NativeSelect>

        <NativeSelect defaultValue='' className='h-10 text-white'>
          <NativeSelectOption value=''>Priority</NativeSelectOption>
          <NativeSelectOption value='noSorting'>No sorting</NativeSelectOption>
          <NativeSelectOption value='HighLow'>High to Low</NativeSelectOption>
          <NativeSelectOption value='LowHigh'>Low to High</NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  );
}

export default FilterBar;
