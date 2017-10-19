const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {  
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

app.listen(PORT, function(err) {  
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${PORT}`);
  }
});