exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('users')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('users').insert([
				{ username: 'Maddy', password: 'chickenpotpie' },
				{ username: 'Kurt', password: 'jamaicajamaica' },
				{ username: 'Des', password: 'lovelovelove' }
			]);
		});
};
