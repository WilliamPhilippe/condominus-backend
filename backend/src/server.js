const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb+srv://condominus:condominus@cluster0-2uiku.mongodb.net/condominus?retryWrites=true&w=majority', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);