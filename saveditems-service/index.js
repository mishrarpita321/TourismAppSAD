const express = require('express'); //creating a express server
const app = express(); //creating an instance of express app
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const Redis = require("ioredis");
const client = new Redis("rediss://default:acda3123066847b389d05569259aa90e@eu2-gorgeous-buzzard-32656.upstash.io:32656");



// Async function to initialize Redis client
async function initializeRedis() {
    try {
        await client.connect(); // Assuming `connect()` is the correct method to establish a connection
        await client.set('foo', 'bar');
        console.log('Redis connected and data set successfully');
    } catch (error) {
        console.error('Error connecting to Redis:', error);
    }
}

// Calling the async function to initialize Redis
initializeRedis();




app.use(routes);

const port = "8000"; //port on which app will handle all requests

mongoose.connect('mongodb+srv://admin:aLDQhMWr2AQ3bsBe@cluster0.yz76vjj.mongodb.net/', { dbName: 'saveditems', }).
    then(() => {
        app.listen(port, () => {
            console.log(`App running on ${port}`);
        })
        console.log('Connected to MongoDB')
    }).catch((error) => {
        console.log(error);
    })