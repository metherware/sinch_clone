require('dotenv').config(); // Для использования переменных из .env
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json()); // Для обработки JSON-запросов

// Тестовый маршрут
app.get('/', (req, res) => {
  res.send('Сервер работает!');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
