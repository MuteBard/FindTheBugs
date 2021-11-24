//theres one bug in this file

const service = require('./debuggingAwait')
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/cats/:id', async (req, res) => {
  const { id } = req.params;
  const result = service.getCatName(id);
  res.send(result);
})

// app.post('/cats/update/:id', async (req, res) => {
//   const { id } = req.params;
//   const { details } = req.body;
//   const result = service.updateCatDetails(id, details);
//   res.send(result);
// })

app.post('/cats/update/:id', async (req, res) => {
  const { id } = req.params;
  const { details } = req.body;
  const result = await service.updateCatDetails2(id, details);
  res.send(result);
})

app.listen(3000, () => {
  console.log('listening at port 3000')
})