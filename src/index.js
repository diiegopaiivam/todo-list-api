const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
var porta = process.env.PORT || 3333

const app = express();
mongoose.connect('mongodb+srv://diegopaiva:lucineide42@cluster0-vc3sa.mongodb.net/todo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, 
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(porta);