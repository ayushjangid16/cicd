const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Hello World again and again and again",
    metadata: "This is a sample API response",
  });
});

app.listen(4545, () => {
  console.log("Server is running on port 4545");
});
