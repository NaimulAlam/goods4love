const express = require('express');

const app = express();

const PORT = 5000;

const rootCallBack = (req, res) =>{
  res.send('Hello World');
}

app.get('/', rootCallBack);


app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}/`)});