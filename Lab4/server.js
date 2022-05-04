const express = require('express')
const app = express()

const db = require("./database.js")

var bodyParser = require("body-parser");app.use(bodyParser.urlencoded({ extended: false }));app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('hello world')
    }) 


    app.get("/cars", (req, res, next) => {
        var sql = "select * from cars_table"
        var params = []
        db.all(sql, params, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json({
                "message": "success",
                "data": rows
            })
        });
    });

    app.listen(3000)
