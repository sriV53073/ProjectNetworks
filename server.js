//the imports

var express = require('express');

const app = express();
var cors = require('cors');
const port = 5000;
app.use(express.json());
app.use(cors()) 
app.get('/', function (req, res) {
  res.send('GET request to the homepage1')
  console.log("Hello");
})
app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});