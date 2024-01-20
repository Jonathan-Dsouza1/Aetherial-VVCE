const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const monCon = require("./src/db/con");
const RegisterUser = require("./src/models/userRegister");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/simulation", (req, res) => {
  res.sendFile(path.join(__dirname, "simulation.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.get("/login-hp", (req, res) => {
  res.sendFile(path.join(__dirname, "login-hp.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "register.html"));
});

app.post("/register", async (req, res) => {
  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(req.body.pass, 10);

    const newUser = await RegisterUser.create({
      uname: req.body.uname,
      email: req.body.email,
      pass: hashedPassword,
    });

    console.log(`New user created ${newUser}`);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(400).send("Error registering user");
  }
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.pass;

    const user = await RegisterUser.findOne({ email: email });

    if (user) {
      // Compare the password using bcrypt.compare
      const passwordMatch = await bcrypt.compare(password, user.pass);

      if (passwordMatch) {
        console.log("User found:", user);
        res.send(user);
      } else {
        res.status(401).send("Invalid Credentials");
      }
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
