const express = require('express')
const app = express()

const db = require("./database.js")

var bodyParser = require("body-parser"); app.use(bodyParser.urlencoded({ extended: false })); app.use(bodyParser.json());

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

app.get("/cars/make/:make", (req, res, next) => {
    var sql = "select * from cars_table where make = ?"
    var params = [req.params.make]
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

app.get("/cars/car_id/:car_id", (req, res, next) => {
    var sql = "select * from cars_table where car_id = ?"
var params = [req.params.car_id]
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

app.get("/cars/owner/:name", (req, res, next) => {
    var sql = "select * from cars_table where name = ?"
    var params = [req.params.name]
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