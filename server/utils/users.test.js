const expect= require('expect');

const {Users} = require('./users');

describe('Users', () => {

	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id:'1',
			name: 'Spaghetti',
			room: 'Boiling room'
		},{
			id:'2',
			name: 'Gnocchi',
			room: 'Potato pasta'
		},{
			id:'3',
			name: 'fusili',
			room: 'Boiling room'
		}]
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Papardelli',
			room: 'The pastas'
		};

		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it('should return names for Boiling room', () => {
		var userList = users.getUserList('Boiling room');

		expect(userList).toEqual(['Spaghetti', 'fusili']);
	});

	it('should return names for Potato pasta room', () => {
		var userList = users.getUserList('Potato pasta');

		expect(userList).toEqual(['Gnocchi']);
	});

	it('should remove a user', () => {
		var user = users.removeUser('1');

		expect(user).toEqual({
				id:'1',
				name: 'Spaghetti',
				room: 'Boiling room'
		});
		expect(users.users.length).toBe(2);
	});
	it('should not remove user', () => {
		var user = users.removeUser('kkk');

		expect(user).toNotExist();
		expect(users.users.length).toBe(3);

	});

	it('should find user', () => {
		var user = users.getUser('2');

		expect(user).toEqual({
			id:'2',
			name: 'Gnocchi',
			room: 'Potato pasta'
		})

	});

	it('should not find user', () => {
		var userId = users.getUser('kkk');

		expect(userId).toNotExist();
	});


});