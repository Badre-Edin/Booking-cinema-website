import express, { Request, Response } from 'express';
import bcrypt from "bcrypt"
import JsonWebToken from "jsonwebtoken"
import cors from "cors"
import cookieParser from "cookie-parser"
import connection from "./connection"

const app = express();
const port = 3000;
const SECRET_JWT_CODE = "psmR3Hu0ihHKfqZymo1m"

app.use(cors())
app.use(cookieParser())
app.use(express.json())


// fetch all the movies
app.get("/movies", (req: Request, res: Response) => {
  const sql = "SELECT * FROM MOVIES;"
  connection.query(sql, (err, results) => {
    if (err) {
      console.log(err)
    }
    else {
      res.status(200).send(results)
    }
  })
})
// add new user with hashed password
app.post("/signup/user", (req: Request, res: Response) => {
  if (!req.body.username || !req.body.password || !req.body.email) {
    res.json({ success: false, error: "send needed params" })
    return
  }
  const hash = bcrypt.hashSync(req.body.password, 10);
  const sql = "INSERT INTO USERS (username,password,email) VALUES(?,?,?)"

  connection.query(sql, [req.body.username, hash, req.body.email], (error, results) => {

    if (error) {
      console.log(error)
    }
    else {
      const token = JsonWebToken.sign({ username: results.username, email: results.email }, SECRET_JWT_CODE)
      res.status(201).send({ success: true, token: token })
    }
  })
})
// get all users
app.get("/api/users", (req: Request, res: Response) => {
  const sql = "SELECT * FROM USERS;"
  connection.query(sql, (err, results) => {
    if (err) {
      console.log(err)
    }
    else {
      res.status(200).send(results)
    }
  })
})

// user login and check if user exist or not
app.post("/login/user", (req: Request, res: Response) => {

  const sql = `SELECT * FROM USERS WHERE username=?;`
  connection.query(sql, [req.body.username], (err: any, data: any) => {

    if (err) {
      console.log(err)
    }

    if (!data.length) {
      return res.status(401).send({
        msg: 'Username is incorrect!'
      });
    }
    const hash = data[0]['password'];
    bcrypt.compare(req.body.password, hash, (err, result) => {
      if (err) {
        res.status(500).send({
          message: 'failed'
        })
      }
      if (result) {
        const token = JsonWebToken.sign({ username: data[0].username, idusers: data[0].idusers }, SECRET_JWT_CODE)
        res.status(200).send({
          message: 'Logged in',
          token: token,
          user: data[0]
        })
      }
      else {
        res.status(401).send({
          message: 'Password is incorrect'
        })
      }
    })
  })
})



app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
})
