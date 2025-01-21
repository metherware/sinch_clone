const { Pool } = require('pg');
const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
});
// Получение всех пользователей
const getUsers = async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM users');
		res.status(200).json(result.rows);
	} catch (error) {
		console.error('Ошибка при получении пользователей', error);
		res.status(500).json({ error: 'Ошибка сервера' });
	}
};

module.exports = { getUsers };
