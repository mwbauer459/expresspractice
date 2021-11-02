const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('You just sent something, didnt you?');
});

router.post('/', function(req, res){
    res.send('You just posted something');
});

module.exports = router;