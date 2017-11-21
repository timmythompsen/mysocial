

var getFavTweets = require('../controllers/mysocial_controller.js') 
getFavTweets = getFavTweets.getFavTweets
var assert = require('chai').assert;

describe('pullingTweets', function() {
	it('it will be a function', function(){
		assert.isFunction(getFavTweets);
	});
});



