
describe('The whatToBuy function', function(){

	it('should tell me to buy a muffin when it is cheaper than a cupcake ', function() {
		// test the scenario here...
		assert.equal('Buy a muffin', whatToBuy(8.75, 7.95));
	});


	it('should tell me to buy a cupcake when it is cheaper than a muffin ', function() {
		// test the scenario here...
		assert.equal('Buy a cupcake', whatToBuy(6.75, 7.95));
	});


});