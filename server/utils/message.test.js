var expect = require('expect');

var {generateMessage} = require('./message');

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
		// assert from match
		// assert text match
		// assert createdAt value is a number
	});
});