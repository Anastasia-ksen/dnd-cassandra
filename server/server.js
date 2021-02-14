const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();

// configure server
app.set('port', 3000);

app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on localhost: ${app.get('port')}`);
});

// create connection to data base
mongoose.connect('mongodb://localhost:27017/dnd', { useNewUrlParser: true })
    // .then(db => {
    //     console.log('[OK] DB is connected')
    // })
    // .catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

// import API
app.use('/api/records', require('./routes/books'));


const db = mongoose.connection;
db.on('error', () => {
    console.error('connection error!')
})
db.once('open', () => {
    console.log('[OK] DB is connected')
})