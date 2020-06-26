const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
const jwt = require('jsonwebtoken');
const server = express();

server.use(cors());
server.use(cookieParser());
server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')));

// login
server.post('/login', async (req, res) => {
    try {
        const UserRepository = require('../src/Repositories/userRepository');
        const {username, password} = req.body;
        if (!username || !password) {
            throw new Error('invalid username or password');
        }
        const user = await UserRepository.getBy({username});
        if (!user) {
            throw new Error('user not found')
        }

        const passwordMatched = user.password === password;
        if (!passwordMatched) {
            throw new Error('username or password incorrect');
        }
        const secret_key = '12345';
        const token = await jwt.sign({username: user.username}, secret_key);
        res.json({
            token,
            status: 200,
        }).status(200);
    } catch (err) {
        res.status(402).send({
            status: err.statusCode,
            message: err.message
        });
    }
});



// vehicles
const vehiclesRoutes = require('../src/Routes/vehiclesRoutes');
server.use('/vehicles', vehiclesRoutes);
// brands
const brandsRoutes = require('../src/Routes/brandsRoutes');
server.use('/brands', brandsRoutes);
// categories
const categoriesRoutes = require('../src/Routes/categoriesRoutes');
server.use('/categories', categoriesRoutes);
// models
const modelsRoutes = require('../src/Routes/modelsRoutes');
server.use('/models', modelsRoutes);
// aggregate
const aggregateRoutes = require('../src/Routes/aggregateRoutes');
server.use('/aggregate', aggregateRoutes);

// catch 404 and forward to error handler
server.use(function(req, res, next) {
    next(createError(404));
});

module.exports = server;