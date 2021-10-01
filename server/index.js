const express = require('express');
const bodyParse = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require("mysql");


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"wangjiye920116",
    database: "jd_sports",
});

app.use(cors());
app.use(express.json())

app.use(bodyParse.urlencoded({extended: true}))

app.get('/api/get', (req,res)=> {
    const sqlSelect = "SELECT * FROM users";
    db.query(sqlSelect, (err, result) => {
        console.log(err);
        res.send(result);
    })
});

app.post("/api/insertUser", (req, res)=> {

    const userId = req.body.userId;
    const userName = req.body.userName;

    const sqlInsert = "INSERT INTO users (userId, userName) VALUES (?,?)";
    db.query(sqlInsert, [userId, userName], (err, result) => {
        console.log(err);
        res.send(result);
    })
});

app.get('/api/getUserRecord', (req,res)=> {
    const userId = req.body.userId;
    const sqlSelect = "SELECT * FROM records WHERE userId = ?";
    db.query(sqlSelect, [userId], (err, result) => {
        console.log(err);
        res.send(result);
    })
});

app.post("/api/insertRecord", (req, res)=> {

    const id = req.body.id;
    const keyword = req.body.keyword;
    const resultNumber = req.body.resultNumber;
    const result = req.body.result;
    const userId = req.body.userId;

    const sqlInsert = "INSERT INTO records (id, keyword, result_number, result, userId) VALUES (?, ?, ?, ?, ?)";
    db.query(sqlInsert, [id, keyword, resultNumber, result, userId], (err, result) => {
        console.log(err);
        res.send(result);
    })
});

app.get('/api/getCurRecordId', (req,res)=> {
    const sqlSelect = "SELECT MAX(id) as curId FROM records";
    db.query(sqlSelect, (err, result) => {
        console.log(err);
        res.send(result);
    })
});

////Find the user name, all the search keyword, the amount of result according to user id by the latest searching order.
app.post('/api/getRecordsByUserId', (req,res)=> {
    const userId = req.body.userId;
    const sqlSelect = "SELECT U.userName AS USER_NAME, R.id AS RECORDS_ID, R.keyword AS KEYWORD, R.result_number AS RESULT_NUMBER FROM users AS U JOIN records AS R WHERE U.userId = ? AND U.userId = R.userId ORDER BY RECORDS_ID DESC;";
    db.query(sqlSelect, [userId], (err, result) => {
        console.log(err);
        res.send(result);
    })
});

app.delete("/api/delete/:userId", (req, res) =>{
    const userId = req.params.userId;
    const sqlDelete = "DELETE FROM users WHERE userId = ?";

    db.query(sqlDelete, userId, (err, result) => {
        if (err) console.log(err);
    });
});

app.put("/api/updateUser", (req, res) =>{
    const userId = req.body.userId;
    const userName = req.body.userName;
    const sqlUpdate = "UPDATE users SET userName = ? WHERE userId = ?";

    db.query(sqlUpdate, [userName, userId], (err, result) => {
        if (err) console.log(err);
    });
});

app.listen(3001, (err) =>{
    console.log('running on port 3001');
});

module.exports = app;