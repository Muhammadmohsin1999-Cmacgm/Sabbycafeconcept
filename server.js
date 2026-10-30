/**
 * SABBY'S | سابيز — Optional Full-Stack Node.js / Express Backend Server
 * Engineered by Muhammadmohsin.webstudio
 * Note: The frontend works 100% standalone on Netlify Drop, OR can be run with `npm start` for local/server REST APIs.
 */
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.get('/api/business', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'assets/data/business.json'), 'utf8'));
  res.json(data);
});

app.get('/api/menu', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'assets/data/menu.json'), 'utf8'));
  res.json(data);
});

app.get('/api/reviews', (req, res) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'assets/data/reviews.json'), 'utf8'));
  res.json(data);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
  console.log(`SABBY'S Luxury Hospitality Server running at http://localhost:${PORT}`);
});
