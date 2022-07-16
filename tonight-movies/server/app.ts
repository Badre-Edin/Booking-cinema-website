import express, { Request, Response } from 'express';
import bcrypt from "bcryptjs"
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
app.put("/onemovie",(req:Request,res:Response)=>{
  console.log("im inside update")
  //req.body should be the useraccount id ,and it will change the user movie foreign key with the movie id
  console.log(req.body)
  const sqlupdate =`UPDATE onemovie SET idmovie =?, name=?, description=? ,time=?, imgurl=? ,categorie=? WHERE line=0;`
  connection.query(sqlupdate,[req.body.idmovie,req.body.name,req.body.description,req.body.time,req.body.imgurl,req.body.categorie],function(error,results){
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
      const token = JsonWebToken.sign({ username: results.username, email: results.email }, SECRET_JWT_CODE)
      res.status(201).send({ success: true, token: token })
    }
  })
})
// app.get("/api/users",(req:Request,res:Response)=>{
//   const sql="SELECT * FROM USERS;"
//   connection.query(sql,(err,results)=>{
//     if(err){
//       console.log(err)
//     }
//     else{
//       res.status(200).send(results)
//     }
//   })
// })

// user login and check if user exist or not
app.post("/login/user", (req: Request, res: Response) => {
  if (!req.body.username || !req.body.password) {
    res.send({ success: false, error: "send needed params" })
    return
  }
  const sql = `SELECT * FROM USERS WHERE username=? AND password=? ;`
  connection.query(sql, [req.body.username, req.body.password], (err, results) => {

    if (!results) {
      res.send({ success: false, error: "User does not exist" })
    }
    else if (!bcrypt.compareSync(req.body.password, results.hash)) {
      res.json({ success: false, error: "Wrong password" })
    }
    else {
      const token = JsonWebToken.sign({ username: results.username }, SECRET_JWT_CODE)
      res.json({ success: true, token: token, })
    }
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
app.get("/api/chair", (req: Request, res: Response) => {
  const sql = "SELECT * FROM chairs;"
  connection.query(sql, (err, results) => {
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
