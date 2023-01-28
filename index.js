var cors = require('cors')
const bp = require('body-parser')

const express = require('express')
const app = express()
const port = 3001
app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/home", (req, res) => {res.send("Hello from Express")})
app.put("/incoming", (req, res) => {console.log(req.body, "Server")})
app.get("/incoming", (req, res) => res.send("Server" ))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})