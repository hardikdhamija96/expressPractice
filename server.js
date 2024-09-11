const express = require("express");
const app = express();

// port should be inside env
const PORT = process.env.PORT || 3000;

// listen method is used to create server
// it takes port as an argument
app.listen(PORT, () => {
  console.log("listening on port:", PORT);
});

app.get("/", (req, res) => {
    res.send("Hello from server!")
});
