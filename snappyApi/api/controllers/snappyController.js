'use strict';


var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

exports.list_all_orders = function(req, res) {
    Task.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.jsonp(task);
    });
};


exports.create_a_order = function(req, res) {
    var new_task = new Task(req.body);
    new_task.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.delete_all = function(req, res) {
    Task.remove({
    }, function(err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};

