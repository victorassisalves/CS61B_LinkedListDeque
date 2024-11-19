import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('LinkedListDeque61B Project Server');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});