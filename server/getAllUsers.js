var getAllUsers = () => {
    const mysql = require("mysql");

    const db = mysql.createPool({
        host: "localhost",
        user: "root",
        password:"wangjiye920116",
        database: "jd_sports",
    });

    const sqlSelect = "SELECT * FROM users";
    db.query(sqlSelect, (err, result) => {
        console.log(err);
        console.log(result);
        return result.length;
    });

    db.end();
}

module.export = getAllUsers;

// app.get('/api/get', (req,res)=> {
//     const sqlSelect = "SELECT * FROM users";
//     db.query(sqlSelect, (err, result) => {
//         console.log(err);
//         res.send(result);
//     })
// });