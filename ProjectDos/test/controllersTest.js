

var getFavTweets = require('../controllers/mysocial_controller.js') 
getFavTweets = getFavTweets.getFavTweets
var assert = require('chai').assert;

describe('pullingTweets', function() {
	it('it will be a function', function(){
		assert.isFunction(getFavTweets);
	});
});



//expect(function () {}).to.not.throw();
//expect({a: 1}).to.not.have.property('b');
//expect([1, 2]).to.be.an('array').that.does.not.include(3);