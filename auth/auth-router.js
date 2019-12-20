const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model');
const signToken = require('../middleware/signToken');

// POST endpoint to register new user
router.post('/register', (req, res) => {
	// implement registration
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 10);
	user.password = hash;

	Users.add(user)
		.then(saved => {
			res.status(201).json(saved);
		})
		.catch(err => {
			console.log('Error registering new user.', err);
			res.status(500).json({ error: 'Error registering new user.' });
		});
});

router.post('/login', (req, res) => {
	// implement login
});

module.exports = router;
