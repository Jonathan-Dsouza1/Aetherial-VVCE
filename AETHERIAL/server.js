// ! Require the files
const express = require("express");
const path = require("path");
const monCon = require("./src/db/con");
const RegisterUser = require("./src/models/userRegister");

// Connect the files
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));
app.use(express.json()); //! Use for postman
app.use(express.urlencoded({ extended: true })); //! Display form data

// Handle requests to the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/simulation", (req, res) => {
  res.sendFile(path.join(__dirname, "simulation.html"));
});

//! USER LOGIN & REGISTER
// Login route
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Register route
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "register.html"));
});

app.post("/register", async (req, res) => {
  try {
    const newUser = await RegisterUser.create({
      uname: req.body.uname,
      email: req.body.email,
      pass: req.body.pass,
    });
    console.log(`New user created ${newUser}`);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(400).send("Error registering user");
  }
});

//! Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
