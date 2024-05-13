import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from 'express-session'
import passport, { use } from "passport";
import { Strategy } from "passport-local";

const app = express();
const port = 3000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.use(session({
  secret: 'TOPSECRETWORD',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, //duration of the cookie
  }
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
  console.log(req.user)
 if(req.isAuthenticated()) { //is the current user in the current sesion auth?
  res.render("secrets.ejs")
 } else {
  res.redirect("login.ejs")
 }
})

app.post("/register", async (req, res) => {
  // const email = req.body.username;
  // const password = req.body.password;
  res.render("register.ejs")

});

app.post("/login", passport.authenticate("local", {
  successRedirect: "/secrets",
  failureRedirect: "'login"
}))

//local strategy
//if the user has the right password o
passport.use(new Strategy(async function verify(username, password, cb) {

  console.log(username)

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      username,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;
      bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (err) {
          return cb(err)
        } else {
          if (result) {
            return cb(null, user)
          } else {
            return cb(null, false)
          }
        }
      });
    } else {
      return cb("User not found")
    }
  } catch (err) {
    return cb("Error")
  }
}))

//we can save the data of the user to localStorage
passport.serializeUser((user, cb) => {
  cb(null, user)
})

passport.deserializeUser((user, cb) => {
  cb(null, user)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
