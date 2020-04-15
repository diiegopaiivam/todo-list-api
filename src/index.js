require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
var porta = process.env.PORT || 8080

const app = express();
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, 
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(porta);