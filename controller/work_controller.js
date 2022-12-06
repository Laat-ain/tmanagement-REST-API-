const db = require('../db')
class Work_controller{
    async createWork(req, res){
        const {task, duration, resources, task_id} = req.body
        const newWork = await db.query('INSERT INTO work (task, duration, resources, task_id) values ($1, $2, $3, $4) RETURNING *', [task, duration, resources, task_id])
        res.json(newWork.rows[0])
    }
    async getWorksByTask(req, res){
        const id = req.query.id
        const work = await db.query('SELECT * FROM work where task_id = $1', [id])
        res.json(work.rows)
    }
    async updateWork(req, res){
        const {id, task, duration, resources, task_id} = req.body
        const work = await  db.query(
            'UPDATE work set task = $1, duration = $2, resources = $3, task_id = $4 where id = $5 RETURNING *',
            [task, duration, resources, task_id, id]
        )
        res.json(work.rows[0])
    }
    // функция удаления
    async deleteWork(req, res){
        const id = req.params.id
        const work = await db.query('DELETE FROM work where id = $1', [id])
        res.json(work.rows[0])
    }
}
module.exports = new Work_controller()