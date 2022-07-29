const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome to the backend, bub. Poopoo.")
});

app.listen(8000, () => {
    console.log('Server started...');
});