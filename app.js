const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Completed CICD pipeline",
    metadata: "This is a custom response",
  });
});

app.listen(4545, () => {
  console.log("Server is running on port 4545");
});
