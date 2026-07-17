import { useState } from 'react';
import { format } from 'date-fns';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

function AddTaskModal({ open, onOpenChange }) {
  const [date, setDate] = useState();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-3xl glass-panel border-white/20'>
        <DialogHeader>
          <DialogTitle className='text-white text-xl'>
            Add a new task
          </DialogTitle>
        </DialogHeader>
        <div className='grid grid-cols-2 gap-6'>
          <div className='flex flex-col gap-4'>
            <Field className='flex flex-col gap-1.5'>
              <FieldLabel htmlFor='input-field-name' className='text-white'>
                Name:
              </FieldLabel>
              <Input
                id='input-field-name'
                type='text'
                placeholder="Name for the task you're going to do"
                className='h-10'
              />
            </Field>

            <Field className='flex flex-col gap-1.5'>
              <FieldLabel htmlFor='textarea-message' className='text-white'>
                Description:
              </FieldLabel>
              <textarea
                id='textarea-message'
                placeholder='A short description of the task..'
                className='resize-none h-32 border border-white/40 rounded-md bg-transparent p-2'
              />
            </Field>

            <Field className='flex flex-col gap-1.5'>
              <FieldLabel className='text-white'>Category:</FieldLabel>
              <NativeSelect defaultValue='' className='h-10'>
                <NativeSelectOption value=''>
                  Select category
                </NativeSelectOption>
                <NativeSelectOption value='all'>All</NativeSelectOption>
                <NativeSelectOption value='Personal'>
                  Personal
                </NativeSelectOption>
                <NativeSelectOption value='Work'>Work</NativeSelectOption>
                <NativeSelectOption value='Household'>
                  Household
                </NativeSelectOption>
                <NativeSelectOption value='Shopping'>
                  Shopping
                </NativeSelectOption>
                <NativeSelectOption value='Other'>Other</NativeSelectOption>
              </NativeSelect>
            </Field>
          </div>

          <div className='flex flex-col gap-4'>
            <Field className='flex flex-col gap-1.5'>
              <FieldLabel className='text-white'>Priority:</FieldLabel>
              <NativeSelect defaultValue='' className='h-10'>
                <NativeSelectOption value=''>
                  Select priority
                </NativeSelectOption>
                <NativeSelectOption value='1'>1</NativeSelectOption>
                <NativeSelectOption value='2'>2</NativeSelectOption>
                <NativeSelectOption value='3'>3</NativeSelectOption>
                <NativeSelectOption value='4'>4</NativeSelectOption>
                <NativeSelectOption value='5'>5</NativeSelectOption>
                <NativeSelectOption value='6'>6</NativeSelectOption>
                <NativeSelectOption value='7'>7</NativeSelectOption>
                <NativeSelectOption value='8'>8</NativeSelectOption>
                <NativeSelectOption value='9'>9</NativeSelectOption>
                <NativeSelectOption value='10'>10</NativeSelectOption>
              </NativeSelect>
            </Field>

            <Field className='flex flex-col gap-1.5'>
              <FieldLabel htmlFor='date-picker-simple' className='text-white'>
                Date:
              </FieldLabel>
              <Popover>
                <PopoverTrigger
                  render={
                    <Button
                      variant='outline'
                      id='date-picker-simple'
                      className='justify-start font-normal h-10 w-full'
                    >
                      {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
                  }
                />
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={date}
                    onSelect={setDate}
                    defaultMonth={date}
                  />
                </PopoverContent>
              </Popover>
            </Field>
          </div>
        </div>
        <div className='flex justify-end gap-4 mt-4'>
          <Button
            variant='outline'
            className='border-white/30 text-white text-base px-8 h-11 bg-white/10 hover:bg-transparent transition-colors'
          >
            Submit
          </Button>
          <Button
            variant='outline'
            className='border-white/30 text-white text-base px-8 h-11 bg-transparent hover:bg-white/10 transition-colors'
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AddTaskModal;
