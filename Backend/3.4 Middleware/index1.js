import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//sending res
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//listening to port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
