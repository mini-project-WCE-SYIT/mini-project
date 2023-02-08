const express = require('express');
const router = express.Router();
const {createUser,login} = require('../controllers/userController'); 

router.route('/createuser').post(createUser);
router.route('/login').post(login);

module.exports = router;