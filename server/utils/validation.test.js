const expect = require('expect');

// import isReal String
const {isRealString} = require('./validation')

// isRealString
describe('isRealString', () => {

	// should reject non-string values
	it('should reject non-string values', () => {
		var res = isRealString(123);
		expect(res).toBe(false);
	});

	// should reject string with only spaces
	it('should reject string with only spaces', () => {

		var res = isRealString('          ');

		expect(res).toBe(false);

	});

	// should allow strings with non-space characters
	it('should allow strings with non-space characters', () => {

		var res = isRealString('   test  ');

		expect(res).toBe(true);


	});



});


	