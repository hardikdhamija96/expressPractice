const express = require("express");
const app = express();

// port should be inside env
const PORT = process.env.PORT;

// listen method is used to create server
// it takes port as an argument
app.listen(3000, () => {
  console.log("listening on port:", 3000);
});
