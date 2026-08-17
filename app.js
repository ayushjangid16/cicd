const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "All vanished",
    metadata: "Change complete now",
  });
});

app.listen(4545, () => {
  console.log("Server is running on port 4545");
});
