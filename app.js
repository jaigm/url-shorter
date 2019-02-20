const express = require('express');
const app = express();
const controller = require('src/controller')

const PORT = 3000

app.get('/', controller.getShorten)

app.listen(PORT, function () {
  console.log('😀')
})
