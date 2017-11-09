'use strict';


var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

exports.list_all_orders = function (req, res) {
    Task.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.jsonp(task);
    });
};

var request = require('request');
exports.get_address_validation = function (req, res) {
    let AddressLine1 = req.query["AddressLine1"];
    let AddressLine2 = req.query["AddressLine2"];
    request(`http://www.yaddress.net/api/address?AddressLine1=${AddressLine1}&AddressLine2=${AddressLine2}&UserKey=`, function (error, response, body) {
        try {
            if (body && JSON.parse(body).ErrorMessage != "") {
                res.jsonp({"valide": JSON.parse(body).ErrorMessage});
            } else {
                res.jsonp({"valide": true});
            }
        } catch(e) {
            res.jsonp({"valide": false});
        }

    });
};

exports.create_a_order = function (req, res) {
    var new_task = new Task(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.delete_all = function (req, res) {
    Task.remove({}, function (err, task) {
        if (err)
            res.send(err);
        res.json({message: 'Task successfully deleted'});
    });
};

