"use strict";

const express = require("express");
const fetch = require("node-fetch");

// Constants
const PORT = 8080;

// App
const app = express();
app.get("/node", async (req, res) => {
  let result = await fetch("http://node-service-01:8080");
  result = await result.json();
  res.send(result);
});
app.get("/go", async (req, res) => {
  let result = await fetch("http://go-service-01:8080");
  result = await result.json();
  res.send(result);
});

app.listen(PORT);
console.log(`Api gateway service is running on ${PORT} port`);
