const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(5000, () => {
 console.log(`Our app is running on port ${ PORT }`);
});

app.get('/', function (req, res) {
  res.send('Saludos desde express');
});