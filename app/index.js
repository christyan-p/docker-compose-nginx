require("dotenv").config();

const express = require('express')
const app = express()
const port = process.env.APP_PORT

const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

let names;
connection.query(`INSERT INTO people(name) VALUES('Some User')`)
connection.query(`SELECT * FROM people`, (err, result) => {
  names = result
})
connection.end()

app.get('/', (req,res) => {
  res.send(
    `<h1>Full Cycle Rocks!</h1>
    <h1>${JSON.stringify(names[0])}</h1>
    `
  )
})

app.listen(port, () => {
   console.log(`Running on ${port}`)
})