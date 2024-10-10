const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const userRoutes = require("../FSD PROJECT/routes/userroute"); 
const app = express();
const mongoURI = "mongodb+srv://kusumasri:<db_password>@cluster0.zokkx.mongodb.net/project?retryWrites=true&w=majority"; 
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Atlas connected successfully"))
  .catch((err) => console.log("MongoDB Atlas connection error:", err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html")); 
});


app.get("/sign-up", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "sign-up.html")); 
});


app.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html")); 
});


app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "views","dashboard.html")); 
});


app.use("/users", userRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:${PORT}");
});