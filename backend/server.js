const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/message', (req, res) => {
  res.json({ message: "Hello from Backend!" });
});

app.listen(3000, () => {
  console.log('Backend is running on http://localhost:3000');
});
