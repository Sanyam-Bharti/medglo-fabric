var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var _ = require('lodash');

var appServerType = {
    http: 'HTTP',
    xdbc: 'XDBC',
}

patientDetails = [
    {
        "Id": 1,
        "Test": "Blood",
        "Date": "03/05/2017",
        "Time": "10:30 am",
        "Doctor": "Dr Ramesh Kumar"
    },
    {
        "Id": 2,
        "Test": "Urine",
        "Date": "03/05/2017",
        "Time": "10:30 am",
        "Doctor": "Dr Veena Kumari"
    },
    {
        "Id": 3,
        "Test": "Plateleds",
        "Date": "03/05/2017",
        "Time": "10:30 am",
        "Doctor": "Dr Rajesh Kumar"
    },
    {
        "Id": 4,
        "Test": "CBC",
        "Date": "03/05/2017",
        "Time": "10:30 am",
        "Doctor": "Dr Purohit Kumar"
    },
    {
        "Id": 5,
        "Test": "Xray",
        "Date": "03/05/2017",
        "Time": "10:30 am",
        "Doctor": "Dr shubham Kumar"
    }
];

doctorDetails = [
    {
        "Id": 1,
        "Patient":"Rajesh",
        "Test": "Blood",
        "Date": "03/05/2017",
        "Time": "10:30 am",
        "Doctor": "Dr Ramesh Kumar"
    },
    {
        "Id": 2,
        "Patient":"Ramesh",
        "Test": "Urine",
        "Date": "03/05/2017",
        "Time": "10:30 am",
        "Doctor": "Dr Veena Kumari"
    },
    {
        "Id": 3,
        "Test": "Plateleds",
        "Patient":"Suresh",
        "Date": "03/05/2017",
        "Time": "10:30 am",
        "Doctor": "Dr Rajesh Kumar"
    },
    {
        "Id": 4,
        "Test": "CBC",
        "Patient":"Prakash",
        "Date": "03/05/2017",
        "Time": "10:30 am",
        "Doctor": "Dr Purohit Kumar"
    },
    {
        "Id": 5,
        "Patient":"Sanjeev",
        "Test": "Xray",
        "Date": "03/05/2017",
        "Time": "10:30 am",
        "Doctor": "Dr shubham Kumar"
    }
];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
});

app.get('/patientDetails', function(req, res) {
    res.end(JSON.stringify(patientDetails));
})

app.get('/doctorDetails', function(req, res) {
    res.end(JSON.stringify(doctorDetails));
})


var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;
    console.log("ML Server listening at http://%s:%s", host, port);

})