// const db = require('../database/dbConfig');
const request = require('supertest');

const server = require('../api/server');

describe('tests server.js', function() {
	describe('POST /api/auth/register', function() {
		it('should register a new user and return 201 OK', function() {
			return request(server)
				.post('/api/auth/register')
				.send({ username: 'Benny', password: 'broham' })
				.then(res => {
					expect(res.status).toBe(201);
				});
		});
	});
});
