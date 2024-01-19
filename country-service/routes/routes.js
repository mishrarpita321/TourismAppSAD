const express = require('express');
const router = express.Router();
const Country = require('../models/countryModel');

router.use(express.json()); //Middleware to parse the JSON data

router.post('/addCountry', async(req, res) => {
    try{
        const country = await Country.create(req.body)
        res.status(200).json(country);
    } catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
router.get('/', (req, res) => {
    res.send("hello i am post");
})

module.exports = router ;