const express = require("express");
const dbconfig = require("./config/dbConfig");

const app = express();
const port = process.env.PORT;

const portfolioRoutes = require("./routes/portfolioRoutes");

app.use("/api/portfolio", portfolioRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port number: ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello");
});
