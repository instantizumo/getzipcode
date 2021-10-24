'use strict';
var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', function (req, res, next) {
    var address = req.query.address;

    var url = "http://zipcoda.net/api?address=" + address;
    request.get({
        uri: encodeURI(url),
        headers: { 'Content-type': 'application/json' },
        json: true
    }, function (err, req, data) {
        if (data.status != 200) {
            res.status(500)
            res.render('error', { error: err })
        } else {
            res.send(data);
        }
    });
});

module.exports = router;
