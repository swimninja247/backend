const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the backend, bub. Poopoo.")
});

app.listen(8000, () => {
    console.log('Server started...');
});