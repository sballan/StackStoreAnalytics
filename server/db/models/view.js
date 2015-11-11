'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    user: String,
    product: String,
    items: Array,
    checkout: Boolean,
    time: {
        type: Date,
        default: Date.now
    }
});



mongoose.model('View', schema);