const express = require('express');
const cors = require('cors');

const app = express();
const options = {
    origin: 'http://localhost:8000',
    useSuccessStatus: 200,
}
app.use(cors(options));

app.get('/', (req, res) => {
    res.send("Welcome to the backend, bub. Poopoo.")
});

app.listen(8000, () => {
    console.log('Server started...');
});