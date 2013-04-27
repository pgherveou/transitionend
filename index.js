/**
 * module dependencies
 */

var prefix = require('prefix');

// transitionend mapping
// src: https://github.com/twitter/bootstrap/issues/2870

var transEndEventNames = {
    'webkitTransition' : 'webkitTransitionEnd',
    'WebkitTransition' : 'webkitTransitionEnd',
    'MozTransition'    : 'transitionend',
    'OTransition'      : 'oTransitionEnd',
    'msTransition'     : 'MSTransitionEnd',
    'transition'       : 'transitionend'
};

module.exports = transEndEventNames[prefix('transition')];