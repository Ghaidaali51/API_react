var docparser = require('docparser');
// var docparser = require('2d97f35d4db5b7ae8842ec7499fd892247b08166');
var client = new docparser.Client("https://api.docparser.com/v1/results/2d97f35d4db5b7ae8842ec7499fd892247b08166");


client.ping()
  .then(function() {
    console.log('authentication succeeded!')
  })
  .catch(function(err) {
    console.log('authentication failed!')
  })