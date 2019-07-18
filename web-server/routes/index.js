const TAG = "router index.js";
var express = require('express');
var router = express.Router();

router.post('/postReport', function(req, res, next) {
    console.log(req.query);
    res.send({success:true});
});

module.exports = router;
