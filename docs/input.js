/*
 * Module for getting numeric input from form fields.
 */
/*jslint browser: true, vars: true, white: true */
/*global UTMConv: false */

var Input = (function () {
	"use strict";

	// Get integer text field with error checking.
	function get_int(id, what) {
	    var s = document.getElementById(id).value;
	    var val = parseInt(s, 10);
	    if (isNaN(val)) {
		throw new Error(what + " not recognized as integer: '" + s + "'");
	    }
	    return val;
	}

	// Get float text field with error checking.
	function get_float(id, what) {
	    var s = document.getElementById(id).value;
	    var val = parseFloat(s);
	    if (isNaN(val)) {
		throw new Error(what + " not recognized as floating-point number: '" + s + "'");
	    }
	    return val;
	}

	// Get degmin coordinates from set of form fields.
	function get_degmin(
	    latdirid, 
	    latdegid, latdegname, 
	    latminid, latminname,
	    lngdirid, 
	    lngdegid, lngdegname, 
	    lngminid, lngminname,
	    datum
	) {
	    var latdir = document.getElementById(latdirid).value;
	    var latdeg = get_int(latdegid, latdegname);
	    var latmin = get_float(latminid, latminname);
	    var lngdir = document.getElementById(lngdirid).value;
	    var lngdeg = get_int(lngdegid, lngdegname);
	    var lngmin = get_float(lngminid, lngminname);
	    return new UTMConv.DegMinCoords(latdir, latdeg, latmin, lngdir, lngdeg, lngmin, datum);
	}

	// Get UTM coordinates from set of form fields.
	function get_utm(
	    utmzid, utmzname,
	    eastingid, eastingname,
	    northingid, northingname
	) {
	    var utmz = get_int(utmzid, utmzname);
	    var easting = get_float(eastingid, eastingname);
	    var northing = get_float(northingid, northingname);

	    return new UTMConv.UTMCoords(utmz, easting, northing);
	}

	return { get_int : get_int, get_float : get_float, get_degmin : get_degmin, get_utm : get_utm };
    }());

