/*
 * Module for getting numeric input from form fields.
 */
/*jslint browser: true, vars: true, white: true */
/*global UTMConv: false */

var Input = (function () {
	"use strict";
	var my = {};

	// Get integer text field with error checking.
	my.get_int = function (id, what) {
	    var s = document.getElementById(id).value;
	    var val = parseInt(s, 10);
	    if (isNaN(val)) {
		throw new Error(what + " not recognized as integer: '" + s + "'");
	    }
	    return val;
	};

	// Get float text field with error checking.
	my.get_float = function (id, what) {
	    var s = document.getElementById(id).value;
	    var val = parseFloat(s);
	    if (isNaN(val)) {
		throw new Error(what + " not recognized as floating-point number: '" + s + "'");
	    }
	    return val;
	};

	// Get degmin coordinates from set of form fields.
	my.get_degmin = function (
	    latdirid, 
	    latdegid, latdegname, 
	    latminid, latminname,
	    lngdirid, 
	    lngdegid, lngdegname, 
	    lngminid, lngminname,
	    datum
	) {
	    var latdir = document.getElementById(latdirid).value;
	    var latdeg = my.get_int(latdegid, latdegname);
	    var latmin = my.get_float(latminid, latminname);
	    var lngdir = document.getElementById(lngdirid).value;
	    var lngdeg = my.get_int(lngdegid, lngdegname);
	    var lngmin = my.get_float(lngminid, lngminname);
	    return new UTMConv.DegMinCoords(latdir, latdeg, latmin, lngdir, lngdeg, lngmin, datum);
	};

	// Get UTM coordinates from set of form fields.
	my.get_utm = function (
	    utmzid, utmzname,
	    eastingid, eastingname,
	    northingid, northingname
	) {
	    var utmz = my.get_int(utmzid, utmzname);
	    var easting = my.get_float(eastingid, eastingname);
	    var northing = my.get_float(northingid, northingname);

	    return new UTMConv.UTMCoords(utmz, easting, northing);
	};

	return my;
    }());

