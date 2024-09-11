const express = require("express");
const path = require('path');
const { title } = require("process");

const app = express();

// port should be inside env
const PORT = process.env.PORT || 3000;

// listen method is used to create server
// it takes port as an argument
app.listen(PORT, () => {
  console.log("listening on port:", PORT);
});

// app.get("/", (req, res) => {
//     res.send("Hello from server!")
// });

// Response can be HTML - inline
// app.get("/", (req, res) => {
//   res.send("<h1>Hello from server Inline Html</h1>");
// });

// Response can be HTML - external file
// app.get("/", (req, res) => {
//     // res.send(path.resolve(__dirname) + "/index.html");

//     res.sendFile(path.resolve(__dirname) + "/index.html");
//   });

//path.resolve(__dirname) -> gives current directories path
//res.send -> to send response
//res.sendFile -> to send file as response

// ADD Multiple routes
// app.get("/about", (req, res) => {
//     res.sendFile(path.resolve(__dirname) + "/about.html");
//   });

// static files like these static html pages can be added using app.use, it requires static file directory
// app.use(express.static('public'))

// File download in express
app.get("/download",(req,res)=>{
    res.download(path.resolve(__dirname)+ "/public" + "/logoDesign.jpg");
})

//but this was static HTML For Dynamic HTML we can use template engine: EJS

app.set("view engine", "ejs");
console.log(app.get("view engine"));

// get files in view folder 
app.get("/",(req,res)=>{
    res.render("index",{
        title:"Home page",
    });
})

app.get("/about",(req,res)=>{
    res.render("about",{
        title:"about ejs"
    });
})
