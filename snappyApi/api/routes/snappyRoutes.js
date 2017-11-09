'use strict';
module.exports = function(app) {
    var snappy = require('../controllers/snappyController');

    app.route('/orders')
        .get(snappy.list_all_orders)
        .post(snappy.create_a_order)
        .delete(snappy.delete_all);

    app.route('/validate')
        .get(snappy.get_address_validation)

};
