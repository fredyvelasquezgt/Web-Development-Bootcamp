import axios from "axios";
import express from "express";

const app = express()
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";


app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL+"/random");
        res.render("index.ejs", {secret: JSON.stringify(result.data.secret), user: JSON.stringify(result.data.username)})
    } catch (error) {
        
    }
    res.render("index.ejs", )
})




app.listen(port, () => {
    console.log("listening on port: ",port)
})



// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

