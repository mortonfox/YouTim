---
layout: layout
title: YouTim home
---

# YouTim: Javascript UTM Conversion library

## Introduction

UTM or [Universal Transverse Mercator](http://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) is a 2-D Cartesian coordinate system. Converting coordinates from a geographic coordinate system, e.g. WGS84, which is typically used by GPS receivers, to UTM maps those coordinates from the curved surface of the Earth to a plane. This makes it simpler to perform geometric calculations on those coordinates. For example, in UTM, one would only need to use the Pythagorean theorem to calculate the distance between two coordinates, whereas in geographic coordinates, one would have to use the Great Circle formula.

YouTim is an object-oriented Javascript library that simplifies converting to and from UTM coordinates. It also includes some general-purpose functions for converting between degree and degree-minute coordinate formats and rendering UTM and geographic coordinates as strings.

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
