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

app.get("/onemovie", (req: Request, res: Response) => {
  const sql = "SELECT * FROM onemovie where line=0 ;"
  connection.query(sql, (err, results) => {
    if (err) {
      console.log(err)
    }
    else {
      res.status(200).send(results)
    }
  })
})
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
app.put("/movies",(req:Request,res:Response)=>{
  console.log("im inside update")
  //req.body should be the useraccount id ,and it will change the user movie foreign key with the movie id
  console.log(req.body)
  const sqlupdate =`UPDATE movies SET ?="reserved" where idmovie=? ;`
  connection.query(sqlupdate,[req.body.data.chair,req.body.data.idmovie],function(error,results){
    if(error){res.status(500).send(error);}
    else{
      res.send("updated onemovie succesfully")
    }
  })
})
app.put("/onemovie",(req:Request,res:Response)=>{
  console.log("im inside update")
  //req.body should be the useraccount id ,and it will change the user movie foreign key with the movie id
  console.log(req.body)
  const sqlupdate =`UPDATE onemovie SET idmovie =?, name=?, description=? ,time=?, imgurl=? ,categorie=? ,chair1=?,chair2=?,chair3=?,chair4=?,chair5=? WHERE line=0;`
  connection.query(sqlupdate,[req.body.idmovie,req.body.name,req.body.description,req.body.time,req.body.imgurl,req.body.categorie,req.body.chair1,req.body.chair2,req.body.chair3,req.body.chair4,req.body.chair5],function(error,results){
    if(error){res.status(500).send(error);}
    else{
      res.send("updated onemovie succesfully")
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
      //pass variables that we want to store in the JWT token
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
        //pass variables that we want to store in the JWT token
        const token = JsonWebToken.sign({ username: data[0].username, idusers: data[0].idusers }, SECRET_JWT_CODE, {
          expiresIn: '7d'
        })
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

app.put("/api",(req:Request,res:Response)=>{
  console.log("im inside update")
  //req.body should be the useraccount id ,and it will change the user movie foreign key with the movie id
  console.log(req.body)
  const sqlupdate =`UPDATE users SET idmovie =${req.body.idmovie}  WHERE id=${req.body.iduser};`
  connection.query(sqlupdate,function(error,results){
    if(error){res.status(500).send(error);}
    else{
      res.send("User linked to a movie successfully")
    }
  })
})
app.get("/api/chairs", (req: Request, res: Response) => {
  const sql = "SELECT * FROM chairs where chair_fk=?;"
  connection.query(sql,req.body.data.idmovie, (err, results) => {
    if (err) {
      console.log(err)
    }
    else {
      res.status(200).send(results)
    }
  })
})
app.put("/api/chair",(req:Request,res:Response)=>{
  console.log("im inside update chair")
  //req.body should be the useraccount id ,and it will change the user movie foreign key with the movie id
  console.log(req.body)
  const sqlupdate =`UPDATE chairs SET ${req.body.chair}=reserved  WHERE idmovie=${req.body.idmovie};`
  connection.query(sqlupdate,function(error,results){
    if(error){res.status(500).send(error);}
    else{
      res.send("chair updated successfully")
    }
  })
})


app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
})
