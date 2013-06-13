---
layout: layout
title: YouTim home
---

# YouTim: Javascript UTM Conversion library

## Introduction

UTM or [Universal Transverse Mercator](http://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) is a 2-D Cartesian coordinate system. Converting coordinates from a geographic coordinate system, e.g. WGS84, which is typically used by GPS receivers, to UTM maps those coordinates from the curved surface of the Earth to a plane. This makes it simpler to perform geometric calculations on those coordinates. For example, in UTM, one would only need to use the Pythagorean theorem to calculate the distance between two coordinates, whereas in geographic coordinates, one would have to use the Great Circle formula.

UTM is not just one coordinate grid, but 60 zones that divide the Earth into 60 north-south strips. Each UTM zone is a 6° slice of the Earth. This is important to note because you cannot perform geometric calculations across different UTM zones. We'll see how to get around that below.

YouTim is an object-oriented Javascript library that simplifies converting to and from UTM coordinates. It also includes some general-purpose functions for converting between degree and degree-minute coordinate formats and rendering UTM and geographic coordinates as strings.

## Usage

First, load the UTM library:

    <script type="text/javascript" src="utmconv.js"></script>

Then create a degree-minute coordinate object and convert it to UTM like so:

    var degmin = new UTMConv.DegMinCoords(latdir, latdeg, latmin, lngdir, lngdeg, lngmin, "wgs84");
    var utm = degmin.to_utm()
    console.log("UTM Zone = " + utm.utmz + " Easting = " + utm.easting + " Northing = " + utm.northing);

That's all there is to it! Once you have the UTM coordinates, the easting is the x axis and the northing is the y axis in the Cartesian system.

The last parameter in the DegMinCoords constructor, which is the datum, defaults to "wgs84", so it could have been omitted in the above example.

Of course, since toString() is defined on all coordinate objects, you could also print out UTM coordinates like so:

    console.log(utm);

The to_utm() method takes one parameter, the UTM zone. If omitted, the zone is calculated during the conversion process. You may wish to specify the UTM zone if you have a set of geographic coordinates and you want to be sure that, once converted to UTM, those are all in the same zone. You'd do the conversion as follows:

    // First coordinate sets the UTM zone for the other two.
    var utm1 = c1.to_utm();
    var utm2 = c2.to_utm(utm1.utmz);
    var utm3 = c3.to_utm(utm1.utmz);

Converting from UTM to degree-minute coordinates is just as simple:

    var degmin = utm.to_degmin();


## Demo

YouTim includes a few examples:

* [UTM conversion demo](utmdemo.htm)
* [Find Center of Circle, given 3 Points on the Circumference](centercirc.htm)
* [Find intersection of two circles](isectcirc.htm)

## Source Code

To view or clone the code, see: [https://github.com/mortonfox/YouTim/tree/gh-pages](https://github.com/mortonfox/YouTim/tree/gh-pages)

Or just use your browser's "view source" feature when viewing the above examples.

## Credits

* The UTM conversion code is based on work by Dr. Steve Dutch: [Converting UTM to Latitude and Longitude](http://www.uwgb.edu/dutchs/UsefulData/UTMFormulas.htm)
* 3-point circle formulae reference: [Circle -- from Wolfram MathWorld](http://mathworld.wolfram.com/Circle.html)
* Circle intersection formulae reference: [Circle-Circle Intersection -- from Wolfram MathWorld](http://mathworld.wolfram.com/Circle-CircleIntersection.html)
* Stylesheet, with minor modifications, is from: [Github Markdown CSS](https://gist.github.com/andyferra/2554919) by Andy Ferra.

<!-- vim:set tw=0: -->
