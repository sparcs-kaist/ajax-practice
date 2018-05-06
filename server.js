/* Environment variables. */
require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');

const PORT = process.env.PORT || 80;
const app = express();

/* Middleware settings. */
app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', 'static/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


/* Add routes. */
const CORRECT_ID = 'SPARCS';
const CORRECT_PW = 'IloveSPARCS';

app.get('/', (req, res) => {
  res.render('index.html');
});

app.post('/api/check/id', (req, res) => {
  if (req.body.id !== CORRECT_ID) return res.json({ match: false });
  res.json({ match: true });
});

app.post('/api/login', (req, res) => {
  if (req.body.id !== CORRECT_ID || req.body.password !== CORRECT_PW) return res.json({ success: false });
  res.json({ success: true });
});


/* Start listening to the given port. */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
