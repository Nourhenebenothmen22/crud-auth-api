require('dotenv').config(); 
const express = require('express');
const helmet = require('helmet'); 
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectdb = require("./database");

const app = express();

// Connexion à la base de données
connectdb();

// Middlewares
app.use(cors());
app.use(helmet()); 
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8000; 

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});