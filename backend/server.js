const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const { readdirSync } = require('fs');

app.use(cors());

readdirSync('./routes').map((route) => app.use('/', require('./routes/' + route)));

app.get('/', (req, res) => {
    res.send("Welcome to the backend, bub. Poopoo.")
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});