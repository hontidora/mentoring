const chai = require("chai");
const assert = chai.assert;
const app = require("../src/check-the-exam");

describe('checkExam', function () {
	it('should return 6 when the params are ["a", "a", "c", "b"], ["a", "a", "b", ""]', function () {
		assert.equal(app.checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 6);
	});
	it('should return 7 when the params are ["a", "a", "c", "b"], ["a", "a", "b", ""]', function () {
		assert.equal(app.checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
	});
	it('should return 16 when the params are ["a", "a", "b", "c"], ["a", "a", "b", "c"]', function () {
		assert.equal(app.checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
	});
	it('should return 0 when the params are ["b", "c", "b", "a"], ["", "a", "a", "c"]', function () {
		assert.equal(app.checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);
	});
});