( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "jquery", "./version" ], factory );
	} else if (typeof exports === "object" && typeof module === "object") {
        
        // CommonJS
		module.exports = function ($) {
            var vf = require("./version");
            vf($);
            return factory($);
        };
	} else {

		// Browser globals
		factory( jQuery );
	}
} ( function( $ ) {

// This file is deprecated
return $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );
} ) );
