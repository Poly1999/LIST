const request = require('supertest');
const app = require('../server');
const Task = require('../models/Task');
const { connect, closeDatabase, clearDatabase } = require('./setup');

beforeAll(() => connect());
afterEach(() => clearDatabase());
afterAll(() => closeDatabase());

describe('Task API', () => {
  test('GET /api/tasks returns empty list initially', () => {
    return request(app)
      .get('/api/tasks')
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual([]);
      });
  });

  test('POST /api/tasks creates a task', () => {
    return request(app)
      .post('/api/tasks')
      .send({ title: 'Buy milk', priority: 5, category: 'Shopping' })
      .then(res => {
        expect(res.status).toBe(201);
        expect(res.body.title).toBe('Buy milk');
        expect(res.body.done).toBe(false);
      });
  });

  test('POST /api/tasks rejects invalid priority', () => {
    return request(app)
      .post('/api/tasks')
      .send({ title: 'Task', priority: 15, category: 'Other' })
      .then(res => {
        expect(res.status).toBe(400);
      });
  });

  test('PATCH /api/tasks/:id marks task as done', () => {
    return Task.create({ title: 'Task', priority: 3, category: 'Work' })
      .then(task =>
        request(app).patch(`/api/tasks/${task._id}`).send({ done: true }),
      )
      .then(res => {
        expect(res.status).toBe(200);
        expect(res.body.done).toBe(true);
      });
  });

  test('DELETE /api/tasks/:id removes the task', () => {
    return Task.create({ title: 'Task', priority: 3, category: 'Work' })
      .then(task =>
        request(app)
          .delete(`/api/tasks/${task._id}`)
          .then(() => Task.findById(task._id)),
      )
      .then(found => {
        expect(found).toBeNull();
      });
  });

  test('GET /api/tasks?status=done filters correctly', () => {
    return Promise.all([
      Task.create({
        title: 'Done task',
        priority: 1,
        category: 'Work',
        done: true,
      }),
      Task.create({
        title: 'Undone task',
        priority: 2,
        category: 'Work',
        done: false,
      }),
    ])
      .then(() => request(app).get('/api/tasks?status=done'))
      .then(res => {
        expect(res.body.length).toBe(1);
        expect(res.body[0].title).toBe('Done task');
      });
  });
});
