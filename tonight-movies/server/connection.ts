import mysql from "mysql"
const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"TOMORROWLAND2018",
    database:"cinemadb"
})
export default connection
