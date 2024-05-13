import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from 'express-session'
import passport from "passport";
import { Strategy } from "passport-local";

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.use(session({
  secret: 'TOPSECRETWORD',
  resave: false,
  saveUninitialized: true
}))

//passport should be after the session
app.use(passport.initialize());
app.use(passport.session())



const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "123456",
  port: 5432,
});
db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});


app.get("/secrets", (req, res) => {
 if(req.isAuthenticated()) { //is the current user in the current sesion auth?
  res.render("secrets.ejs")
 } else {
  res.redirect("login.ejs")
 }
})

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const loginPassword = req.body.password;

  
});

//local strategy
//if the user has the right password o
passport.use(new Strategy(function verify(username, password, cb) {

  console.log(username)

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;
      bcrypt.compare(loginPassword, storedHashedPassword, (err, result) => {
        if (err) {
          console.error("Error comparing passwords:", err);
        } else {
          if (result) {
            res.render("secrets.ejs");
          } else {
            res.send("Incorrect Password");
          }
        }
      });
    } else {
      res.send("User not found");
    }
  } catch (err) {
    console.log(err);
  }
}))

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
