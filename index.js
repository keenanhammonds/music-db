const express = require('express');
const parser = require('body-parser');
const app = express();

parser.json();



app.listen(4000, () => console.log('server up and running on port 3000!'));
