const mongoose = require('mongoose');

const CATEGORIES = ['Personal', 'Work', 'Household', 'Shopping', 'Other'];

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
    done: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: Number,
      required: [true, ' Number is required'],
      min: 1,
      max: 10,
    },
    category: {
      type: String,
      enum: CATEGORIES,
      default: 'Other',
    },
    dueDate: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

taskSchema.statics.CATEGORIES = CATEGORIES;

module.exports = mongoose.model('Task', taskSchema);
