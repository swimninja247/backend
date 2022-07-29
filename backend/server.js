const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { readdirSync } = require('fs');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

readdirSync('./routes').map((route) => app.use('/', require('./routes/' + route)));

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
})
.then(() => console.log('Database connected successfully'))
.catch((err) => console.log('Error connecting to MongoDB', err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});