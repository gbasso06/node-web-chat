var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		// stroe res in variable
		
		var message = {
			from: 'testSystem',
			text: 'Test is ok'
		}

		res = generateMessage(message.from, message.text)
		
		expect((res) => {
			expect(res.from).toBe(message.from);
			expect(res.text).toBe(message.text);
			expect(res.createdAt).toBeA('number');
		});
		
	});
});

describe('generateLocationMessage', () => {

	it('should generate correct location object', () => {
		var from = 'testSystem';
		var latitude = -8.7510815;
		var longitude = -63.8785498;
		var message = generateLocationMessage(from, latitude, longitude);

		
		expect(message.from).toBe(from);
		expect(message.createdAt).toBeA('number');
		expect(message.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
		

	});

});