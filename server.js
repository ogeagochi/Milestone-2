const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);

  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server listening on port https://localhost:${port}`);
});
