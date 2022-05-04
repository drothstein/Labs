const express = require('express')
const app = express()

const db = require("./database.js")

var bodyParser = require("body-parser");app.use(bodyParser.urlencoded({ extended: false }));app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('hello world')
    }) 
