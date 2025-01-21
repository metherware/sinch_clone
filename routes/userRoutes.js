const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');

//Маршрут для получения всех пользователей
router.get('/', getUsers);

module.exports = router;
