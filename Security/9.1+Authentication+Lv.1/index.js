import express from "express";
import bodyParser from "body-parser";
import pg from 'pg'
import express from "express";
import bcrypt from 'bcrypt'


const app = express();
const port = 3000;
const saltRounds = 10;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "123456",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {

 
  //avoid duplicate data
  const checkResult = await db.query("SELECT * FROM users WHER email = $1", 
  [email])

  if(checkResult.rows.length > 0) {
    res.send("Email already exists. Try logging in.")
  } else {
    //hash the password
    bcrypt.hash(password, saltRounds, async (err, hash)=>{
      if(err) {
        console.log('hashing error', err)
      } else {
        //insert data into my database
        const result = await db.query(
          "INSERT INTO users (email, password) VALUES ($1, $2)",
          [email, password]
        );
        console.log(result)
        res.render("secrets.ejs")
      }
    
    })
  
  }
  console.log(result)
  res.render("secrets.ejs")

  } catch (err) {
    console.log(err)
  }




});

//add the comparision hash
app.post("/login", async (req, res) => {
  const email = req.body.username;
  const loginPassword = req.body.password;

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;

      bcrypt.compare(loginPassword, storedHashedPassword, (err, result) => {
        if(err) {
          console.log('error comparing passwords', err)
        } else {
          if(result) {
            res.render("secrets.ejs");
          } else {
            res.send("Incorrect Password");

          }
        }
      } )

      if (password === storedPassword) {
        res.render("secrets.ejs");
      } else {
        res.send("Incorrect Password");
      }
    } else {
      res.send("User not found");
    }
  } catch (err) {
    console.log(err);
  }

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
