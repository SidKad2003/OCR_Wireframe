// import { useState } from 'react';
var cors = require('cors')
const bp = require('body-parser')
const express = require('express')
const axios = require('axios');

const app = express()
const port = 3001
app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(bp.json({
  limit: '500mb'
}));

app.use(bp.urlencoded({
  limit: '500mb',
  parameterLimit: 100000,
  extended: true 
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/home", (req, res) => { res.send("Hello from Express") })
app.put("/incoming", (req, res) => {
  console.log("req.body", "Server")
  axios.post('https://api.ocr.space/parse/image', {
    apikey: 'K85177617188957',
    file: req.body.image, // this is the image file you want to extract text from
  })
  .then(function (response) {
    console.log(response.json);
  })
  .catch(function (error) {
    console.log(error);
  });
})

app.get("/incoming", (req, res) => res.send("Server"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})