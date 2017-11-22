var express = require('express');
var router = express.Router();
var axios = require('axios');

const key = '<YOUR_API_KEY>';
const match_id = '3574521482';
/* API DETAIL. */
router.get('/match-detail', function(req, res, next) {
  axios.get(`https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1/?key=${key}&match_id=${match_id}`)
  .then(function(data) {
    console.log(data);
    // res.send('respond with a resource');
    res.json(data.data);  
  
  })
  .catch(function (error) {
    console.log(error);
  });
});

module.exports = router;