const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const db = new sqlite3.Database('./.data/choices.db');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS choices (id INTEGER PRIMARY KEY AUTOINCREMENT, choice TEXT)');
});

app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/pages'));

app.get('/', (req, res) => {
  res.render('index', { results: req.query.results });
});

app.get('/admin', (req, res) => {
  res.render('admin');
});

app.get('/api/data', (req, res) => {
  db.all('SELECT * FROM choices', (err, rows) => {
    if (err) {
      return res.status(500).send({ error: err.message });
    }
    res.send(rows);
  });
});

app.post('/api/choices', (req, res) => {
  const { choice } = req.body;
  db.run('INSERT INTO choices (choice) VALUES (?)', choice, function (err) {
    if (err) {
      return res.status(500).send({ error: err.message });
    }
    res.status(201).send({ id: this.lastID, choice });
  });
});

app.delete('/api/choices', (req, res) => {
  db.run('DELETE FROM choices', (err) => {
    if (err) {
      return res.status(500).send({ error: err.message });
    }
    res.status(204).end();
  });
});

app.post('/reset', (req, res) => {
  if (req.body.adminKey === process.env.ADMIN_KEY) {
    db.run('DELETE FROM choices', (err) => {
      if (err) {
        return res.status(500).send('Error clearing choices');
      }
      res.status(200).send('Histórico limpo com sucesso.');
    });
  } else {
    res.status(401).send('Chave de admin inválida.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
