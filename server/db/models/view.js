'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    user: String,
    product: String,
    items: {
    	type: mongoose.Schema.Types.Mixed
    },
    checkout: Boolean,
    time: {
        type: Date,
        default: Date.now
    }
});



mongoose.model('View', schema);