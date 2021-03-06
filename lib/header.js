var strata = require("./index"),
    errors = require("./errors");

module.exports = Header;

/**
 * Represents a generic HTTP header.
 */
function Header(name, value) {
    if (typeof name == "undefined") {
        throw new errors.Error("Header name is required");
    }

    this.name = name;
    this.value = value || "";
}

Header.prototype.toString = function toString() {
    return [this.name, this.value].join(": ");
}
