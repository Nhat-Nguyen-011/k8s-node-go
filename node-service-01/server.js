"use strict";

const express = require("express");

// Constants
const PORT = 8080;

// App
const app = express();
app.get("/", (req, res) => {
  res.json({ status: "yeah boi" });
});

app.listen(PORT);
console.log(`Api gateway service is running on ${PORT} port`);
