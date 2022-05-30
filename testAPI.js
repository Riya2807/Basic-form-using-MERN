var express = require('express');
var app = express();

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/mydb");

const connection = mongoose.connection;
const router = express.Router();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var nameSchema = new mongoose.Schema({
    name: String

});
var User = mongoose.model("User", nameSchema);

app.get('/', function (req, res, next) {
    
    if (req.query.name) {
        var myData = new User({
            name: req.query.name
        });
        myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
    } else {
        res.status(400).send("Enter a username");
    }
    
    
});


connection.once('open', () => {
    console.log('MongoDB connected successfully');
})

/*
var schema = new mongoose.Schema({
    name: String,
    value: String
})
*/

var data=mongoose.model("User", nameSchema);

router.route('/test').get((req, res) => {
    data.find((err, users) => {
        if (err)
            console.log(err)
        else
            res.json(users);

    })
})


    app.use('/', router);



    app.listen(8000, function () {
        console.log('server started on port 8000');
    });

module.exports = app;