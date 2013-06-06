/* 
 * Simple class for writing program output to a div.
 */
/*jslint browser: true, vars: true, white: true */

var Output = function (divName, errorStyle) {
    "use strict";
    this.divName = divName || "output";
    this.errorStyle = errorStyle || "error";
    this.frag_count = 0;
};

// Clear the output div.
Output.prototype.clearOutput = function () {
    "use strict";
    var output = document.getElementById(this.divName);
    while (output.firstChild) {
	output.removeChild(output.firstChild);
    }
    this.frag_count = 0;
    return this;
};

Output.OutputFrag = function (frag, frag_count) {
    "use strict";
    this.frag = frag;
    this.frag_count = frag_count;
};

Output.OutputFrag.prototype.getFrag = function () {
    "use strict";
    return this.frag;
};

Output.prototype.newFrag = function () {
    "use strict";
    var frag = document.createDocumentFragment();
    this.frag_count += 1;
    return new Output.OutputFrag(frag, this.frag_count);
};

// Write a document fragment to the output div.
Output.prototype.writeFrag = function (frag) {
    "use strict";
    var output = document.getElementById(this.divName);
    output.insertBefore(frag.getFrag(), output.firstChild);
    return this;
};

// Write a string to the document fragment.
Output.OutputFrag.prototype.write = function (str) {
    "use strict";
    this.frag.appendChild(document.createTextNode(str));
    return this;
};

// Write a string with a newline to the document fragment.
Output.OutputFrag.prototype.writeln = function (str) {
    "use strict";
    this.frag.appendChild(document.createTextNode(str));
    this.frag.appendChild(document.createElement("br"));
    return this;
};

// Write a heading with a newline to the document fragment.
Output.OutputFrag.prototype.writeln_head = function (str) {
    "use strict";
    var head = document.createElement("u");
    head.appendChild(document.createTextNode(this.frag_count + ": " + str));
    this.frag.appendChild(head);
    this.frag.appendChild(document.createElement("br"));
    return this;
};

// Write a string in red to signify an error.
Output.prototype.errorln = function (str) {
    "use strict";
    var output = document.getElementById(this.divName);
    var span = document.createElement("span");
    // setAttribute("class" ...) does not work in IE.
    span.className = this.errorStyle;
    span.appendChild(document.createTextNode(str));
    span.appendChild(document.createElement("br"));
    output.insertBefore(span, output.firstChild);
    return this;
};


