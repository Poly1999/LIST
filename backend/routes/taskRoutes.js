const express = require('express');
const router = express.Router();

const {
  getTasks,
  getCategories,
  crerateTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

router.get('/categories', getCategories);
router.get('/', getTasks);

router.post('/', crerateTask);

router.patch('/:id', updateTask);

router.delete('/:id', deleteTask);

module.exports = router;
