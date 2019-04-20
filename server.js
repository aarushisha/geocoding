const express = require('express');
const path = require('path');
const http = require('http');
var bodyParser = require('body-parser');


const port = 8888;

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/coordinates/:coordinates', (req, res) => {
  var coordinatesStr = req.params.coordinates.slice(1, req.params.coordinates.length);
  console.log(coordinatesStr);
  var location = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinatesStr}&key=AIzaSyAxtbHSwZgv8BAIDLPqQposKbwnDhO-oyA`;
  res.send({location: location});
})

app.listen(port, () => console.log(`listening on port ${port}`));