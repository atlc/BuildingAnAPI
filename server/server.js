const express = require('express');

let app = express();
let port = 3000;

app.use(express.json());
app.listen(port);
console.log(`App listening on ${port}`);