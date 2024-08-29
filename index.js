require('dotenv').config();

const express = require('express');
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const { collection, Contect } = require("./mongoose"); // Import Contect model

const app = express();
const PORT = process.env.PORT || 6300;

// Specify the path to the home.ejs file directly
const homePath = path.join(__dirname, 'home.ejs'); 

app.set('view engine', 'ejs');

// Serve the home page
app.get('/', (req, res) => {
    res.render(homePath);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/contect", (req, res) => {
    res.render("contect");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.post('/contect', async (req, res) => {
    const messege = {
        name: req.body.name,
        email: req.body.email,
        messege: req.body.messege,
    }
    await Contect.insertMany([messege])
    res.render(homePath);
});

app.get('/', async (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const ipAddress = new IPAddress({ ip });
    await ipAddress.save();
    console.log('IP address stored successfully');
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
