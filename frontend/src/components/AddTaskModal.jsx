'use client';
import { useState, useEffect } from 'react';
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

const EMPTY_FORM = { title: '', description: '', category: '', priority: '' };

function getInitialForm(task) {
  if (!task) return EMPTY_FORM;
  return {
    title: task.title || '',
    description: task.description || '',
    category: task.category || '',
    priority: task.priority ? String(task.priority) : '',
  };
}

function AddTaskModal({ open, onOpenChange, onSave, task }) {
  const [form, setForm] = useState(() => getInitialForm(task));
  const [date, setDate] = useState(() =>
    task?.dueDate ? new Date(task.dueDate) : undefined,
  );
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function handleChange(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  function handleSubmit() {
    onSave({
      title: form.title,
      description: form.description,
      category: form.category,
      priority: form.priority,
      dueDate: date || null,
    });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-3xl glass-panel-modal border-white/20'>
        <DialogHeader>
          <DialogTitle className='text-white text-xl'>
            {task ? 'Edit task' : 'Add new task'}
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
                value={form.title}
                placeholder="Name for the task you're going to do"
                className='h-10'
                onChange={e => handleChange('title', e.target.value)}
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
                value={form.description}
                onChange={e => handleChange('description', e.target.value)}
              />
            </Field>

            <Field className='flex flex-col gap-1.5'>
              <FieldLabel className='text-white'>Category:</FieldLabel>
              <NativeSelect
                id='modal-category'
                className='h-10'
                value={form.category}
                onChange={e => handleChange('category', e.target.value)}
              >
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
              <NativeSelect
                id='modal-priority'
                className='h-10'
                value={form.priority}
                onChange={e => handleChange('priority', e.target.value)}
              >
                <NativeSelectOption value=''>
                  Select priority
                </NativeSelectOption>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                  <NativeSelectOption key={n} value={String(n)}>
                    {n}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            </Field>

            <Field className='flex flex-col gap-1.5'>
              <FieldLabel htmlFor='date-picker-simple' className='text-white'>
                Date:
              </FieldLabel>
              <Popover
                open={isDatePickerOpen}
                onOpenChange={setIsDatePickerOpen}
              >
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
                    onSelect={selectedDate => {
                      setDate(selectedDate);
                      setIsDatePickerOpen(false);
                    }}
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
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            variant='outline'
            className='border-white/30 text-white text-base px-8 h-11 bg-transparent hover:bg-white/10 transition-colors'
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AddTaskModal;
