// var getAllUsers = require('./getAllUsers');
var expect = require('chai').expect;
// import getAllUsers from './getAllUsers';
// import chai from 'chai';

// let expect = chai.expect;


// describe('Getting User Result', function() {
//   it('No input', function() {
//     expect(getAllUsers()).to.be.equal(4);
//   });
// });
var getAllUsers = async () => {
    const mysql = require("mysql");

    // const express = require('express');
    // const bodyParse = require('body-parser');
    // const cors = require('cors')
    // const app = express();

    // app.use(cors());
    // app.use(express.json())
    // app.use(bodyParse.urlencoded({extended: true}))

    const db = mysql.createPool({
        host: "localhost",
        user: "root",
        password:"wangjiye920116",
        database: "jd_sports",
    });

    const sqlSelect = "SELECT * FROM users";

    // return app.get((req,res)=> {
    //     const sqlSelect = "SELECT * FROM users";
    //     db.query(sqlSelect, (err, result) => {
    //         console.log(result);
    //         res.send(result);
    //         // return result.length;
    //     })
    // });

    app.get('/api/get', (req,res)=> {
        const sqlSelect = "SELECT * FROM users";
        db.query(sqlSelect, (err, result) => {
            console.log(result);
            res.send(result);
            return result;
        })
    });

    // await db.query(sqlSelect, (err, result) => {
    //     console.log(err);
    //     console.log(result);
    //     // var res = Number(result.length);
    //     return result;
    // });
    // db.end();
}

// var expected = getAllUsers();

describe('Getting User Result', function() {
    it('should return -1 when the value is not present', function(done) {
    //   expect(getAllUsers()).to.be.equal(4);
        // expect(getAllUsers()).to.be.an('array');
        expect(getAllUsers()).to.be.equal(4);
        done();
    });
  
});