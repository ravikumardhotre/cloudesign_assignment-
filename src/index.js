const mongoose = require('mongoose')
const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const route = require('./routes/route.js');
const models = require('./models/todoModel');

const app = express();
app.use(express.static(path.join(__dirname, "/../index.html")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/Ravikumar_96?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err))


app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
})