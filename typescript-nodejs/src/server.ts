import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World! This is Yoofi, May God help me!");
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.get("/ping", (req, res) => {
  res.send("Ping Pong!");
});

app.get("/hello", (req, res) => {
  res.send("Hello, World! How are you?");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
