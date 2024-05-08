const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();

const db = process.env.DB;

mongoose
  .connect(db)
  .then(() => {
    console.log("connection is successfully to the atals database");
  })
  .catch((error) => {
    console.log("connection is failed" + error);
  });
