const test = require("node:test");
const assert = require("node:assert/strict");

function add(a, b) {
    return a + b;
}

test("adds two numbers", () => {
    assert.equal(add(2, 3), 6);
});