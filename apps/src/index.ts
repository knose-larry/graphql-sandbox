import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js app!');
});

app.listen(port, () => {
  console.log(`Node.js app listening on port ${port}`);
});