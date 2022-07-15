import express, { Request, Response } from 'express';
import bcrypt, {hash} from "bcrypt"
import JsonWebToken from "jsonwebtoken"
import cors from "cors"
import connection from "./connection"

const app = express();
const port = 3000;
const SECRET_JWT_CODE = "psmR3Hu0ihHKfqZymo1m"

app.use(cors())

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
  if (!req.body.username || !req.body.password) {
    res.send({ success: false, error: "send needed params" })
    return
  }
  const sql = `SELECT password FROM USERS WHERE username=?;`
  connection.query(sql, [req.body.username], (err: any, results: any) => {

    if (err) {
      console.log(err)
    }
    const hash = results[0].password;
    //  if (!results) {
    //     res.send({ success: false, error: "User does not exist" })
    //   }
    bcrypt.compare(req.body.password, hash, (err, result) => {
      if (err) {
        res.send({
          message: 'failed',
          statusCode: 500,
          data: err
        })
      }
      if (result) {
        const token = JsonWebToken.sign({ username: results.username, email: results.email }, SECRET_JWT_CODE)
        res.send({
          message: 'Success',
          statusCode: 200,
          data: { token: token }
        })
      }
      else {
        res.send({
          message: 'failed',
          statusCode: 500,
          data: err
        })
      }
    })
  })
})



app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
})
