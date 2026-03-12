const express = require('express');
const bodyParser = require('body-parser');
const mariadb = require('mariadb');
const app = express();
const PORT = 3001;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'aloha',
    database: 'task_manager',
    connectionLimit: 100
});

app.post('/tasks', async (req, res) => {
    const { title, description } = req.body;
    try {
        const conn = await pool.getConnection();
        const result = await conn.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description]);
        res.status(201).send({ id: Number(result.insertId), title, description });
    } catch (err) {
        res.status(500).send(err);
        console.error(err);
    }
});

app.get('/tasks', async (req, res) => {
    try {
        const conn = await pool.getConnection();
        const rows = await conn.query('SELECT * FROM tasks');
        res.status(200).send(rows);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const conn = await pool.getConnection();
        await conn.query('DELETE FROM tasks WHERE id = ?', [id]);
        res.status(200).send({ message: 'Tarefa eliminada' });
    } catch (err) {
        res.status(500).send(err);
    }
});


app.listen(PORT, () => {
    console.log(`Servidor a correr na porta ${PORT}`);
});
