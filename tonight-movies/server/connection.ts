import mysql from "mysql"
const connect=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"TOMORROWLAND2018",
    database:"cinemadb"
})
export default connect