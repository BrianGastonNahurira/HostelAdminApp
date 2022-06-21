const express = require("express");
const res = require("express/lib/response");
const app = express();
const axios = require('axios');

const { engine } = require("express-handlebars");
const { json } = require("express/lib/response");

const port = process.env.PORT || 5002;

// fetch("http://localhost:5001")
//   .then((response) => {
//     // Do something with response
//     console.log('fetch succeessfull......');
//   })
//   .catch(function (err) {
//     console.log("Unable to fetch -", err);
//   });

  // fetch('http://localhost:5001')
  // .then(response => response.json())
  // .then(json => console.log(json))


app.use(express.static("public"));

app.use("/images", express.static(__dirname + "public/images"));
app.use("/styling", express.static(__dirname + "public/styling"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/script", express.static(__dirname + "public/script"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.engine(
  "ejs",
  engine({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: "ejs",
    defaultLayout: "index",
    partialsDir: `${__dirname}/views/partials`,
  })
);

app.get("/", (req, res) => {
  res.render("main", { layout: "index" });
});

app.get("/addHostel", (req, res) => {
  res.render("addHostel", { layout: "hostel" });
});

app.get("/addedHostel", (req, res) => {
  res.render("addedHostel", { layout: "addedHostels" });
});

app.get("/login", (req, res) => {
  res.render("login", { layout: "login" });
});

app.get("/register", (req, res) => {
  res.render("register", { layout: "register" });
});



app.all("*", (req, res) => {
  res.status(404).send("oooppss!!!!  There is nothing here");
});

app.listen(port, (req, res) => {
  console.log(`the server is listening on port ${port} .........`);
});
