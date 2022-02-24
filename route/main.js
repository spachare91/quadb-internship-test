const express = require('express');
const dotenv=require('dotenv');
const {fetchDataandDisplay,displaydata}= require('../controller/mainController')
const router= express.Router();

// fetch top 10 result and store in db
router.get('/fetch', fetchDataandDisplay)

router.get('/', displaydata)


// display data in frontend

module.exports=router

