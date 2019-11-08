const express = require('express');
const router = express.Router();

router.get("/",(req,res) =>{
    console.log("Response from index page");
    res.send("Response from index page");
});

module.exports = router;