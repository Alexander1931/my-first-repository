const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();

mongoose.connect('mongodb://localhost:27017/myWebsite', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(express.json());
app.use(express.static('public'));

app.use('/', authRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
