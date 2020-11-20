const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Our app is running on port ${ PORT }`);
});

app.get('/hola', function (req, res) {
  res.send('Saludos desde express');
});