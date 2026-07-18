const Task = require('../models/Task');

// GET /api/tasks
// Query params: search, status (all|done|undone), category, sort (priority_asc|priority_desc)

function getTasks(req, res) {
  const { search, status, category, sort } = req.query;

  const filter = {};

  if (search) {
    filter.title = { $regex: search, $options: 'i' };
  }

  if (status === 'done') {
    filter.done = true;
  } else if (status === 'undone') {
    filter.done = false;
  }

  if (category && category !== 'all') {
    filter.category = category;
  }

  let sortOption = { createdAt: -1 };
  if (sort === 'priority_asc') {
    sortOption = { priority: 1 };
  } else if (sort === 'priority_desc') {
    sortOption = { priority: -1 };
  }

  Task.find(filter)
    .sort(sortOption)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to fetch tasks' });
    });
}

// GET /api/tasks/categories

function getCategories(req, res) {
  res.status(200).json(Task.CATEGORIES);
}

// POST /api/tasks

function crerateTask(req, res) {
  const { title, description, priority, category, dueDate } = req.body;

  Task.create({ title, description, priority, category, dueDate })
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res
        .status(400)
        .json({ message: 'Failed to create task', error: err.message });
    });
}

// PATCH /api/tasks/:id

function updateTask(req, res) {
  const { id } = req.params;
  const updates = req.body;

  Task.findByIdAndUpdate(id, updates, {
    returnDocument: 'after',
    runValidators: true,
  })
    .then(task => {
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.status(200).json(task);
    })
    .catch(err => {
      res
        .status(400)
        .json({ message: 'Failed to update task', error: err.message });
    });
}

// DELETE /api/tasks/:id

function deleteTask(req, res) {
  const { id } = req.params;

  Task.findByIdAndDelete(id)
    .then(task => {
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.status(200).json({ message: 'Task deleted', id });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Failed to delete task', error: err.message });
    });
}

module.exports = {
  getTasks,
  getCategories,
  crerateTask,
  updateTask,
  deleteTask,
};
