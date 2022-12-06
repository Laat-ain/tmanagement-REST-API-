const db = require('../db')
class Management_controller{
    // создать задачу, параметры (запрос, ответ)
    async createTask(req, res){
        const {order_name, startDate} = req.body
        const newTask = await db.query('INSERT INTO task (order_name, startDate) values ($1, $2) RETURNING *', [order_name, startDate])
        res.json(newTask.rows[0])
    }

    // возвращаем все "задачи", которые есть
    async getTask(req, res){
        const task = await db.query('SELECT * FROM task')
        res.json(task.rows)
    }

    // возвращаем конкретную "задачу",по уникальному идентефикатору
    async getOneTask(req, res){
        const id = req.params.id
        const task = await db.query('SELECT * FROM task where id = $1', [id])
        res.json(task.rows[0])
    }

    // функция обновления
    async updateTask(req, res){
        const {id, order_name, startDate} = req.body
        const task = await  db.query(
            'UPDATE task set order_name = $1, startDate = $2 where id = $3 RETURNING *',
            [order_name, startDate, id]
        )
        res.json(task.rows[0])
    }

    // функция удаления
    async deleteTask(req, res){
        const id = req.params.id
        const task = await db.query('DELETE FROM task where id = $1', [id])
        res.json(task.rows[0])
    }
}
// экспортирует оъект контролера
module.exports = new Management_controller()
