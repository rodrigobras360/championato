const fastify = require('fastify')({ logger: true });
const path = require('path');
const dotenv = require('dotenv');
const { addChoice, getChoices, clearChoices } = require('./src/sqlite');

dotenv.config();

fastify.register(require('@fastify/formbody'));
fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
});
fastify.register(require('@fastify/view'), {
  engine: {
    handlebars: require('handlebars')
  },
  root: path.join(__dirname, 'src/pages'),
  viewExt: 'hbs'
});

// Serve pages
fastify.get('/', async (request, reply) => {
  const params = { results: request.query.results };
  return reply.view('index.hbs', params);
});

fastify.get('/admin', async (request, reply) => {
  return reply.view('admin.hbs');
});

// API endpoints
fastify.get('/api/data', async (request, reply) => {
  getChoices((err, rows) => {
    if (err) {
      return reply.status(500).send({ error: err.message });
    }
    reply.send(rows);
  });
});

fastify.post('/api/choices', async (request, reply) => {
  const { choice } = request.body;
  addChoice(choice, (err, id) => {
    if (err) {
      return reply.status(500).send({ error: err.message });
    }
    reply.status(201).send({ id, choice });
  });
});

fastify.delete('/api/choices', async (request, reply) => {
  clearChoices((err) => {
    if (err) {
      return reply.status(500).send({ error: err.message });
    }
    reply.status(204).end();
  });
});

fastify.post('/reset', async (request, reply) => {
  if (request.body.adminKey === process.env.ADMIN_KEY) {
    clearChoices
