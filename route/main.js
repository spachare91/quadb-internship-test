const express = require('express');
const {fetchDataandDisplay,handleError}= require('../controller/mainController')
const router= express.Router();

// fetch top 10 result from api ,updates latest records in db and displays on frontend
router.get('/', fetchDataandDisplay)


// handling errors
router.get('/error', handleError)


module.exports=router

