require('dotenv').config(); // Для использования переменных из .env
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// db PostgreSQL connection
const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
});

pool.connect()
	.then(() => console.log('Успешное подключение к БД'))
	.catch(err => console.error('Ошибка подключения к БД', err));

// Middleware
app.use(bodyParser.json()); // Для обработки JSON-запросов

app.use('/api/users', userRoutes);

// Тестовый маршрут
app.get('/', (req, res) => {
  res.send('Сервер работает!');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
