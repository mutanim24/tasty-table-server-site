const express = require('express');
const app = express();
var cors = require('cors')
const port = 4000;

app.use(cors())

const chefs = require('./data/chefs.json')
const recipes = require('./data/recipes.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
  const id =  req.params.id;
  const chefDetails = chefs.find(chef => chef.id == id);
  res.send(chefDetails)
})

app.get('/recipes', (req, res) => {
  res.send(recipes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})