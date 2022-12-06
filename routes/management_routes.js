// получаем из express
const Router = require('express')
// создаем объект класа Router
const router = new Router()
//импортируем объект контроллера для использования функций
const task_controller = require('../controller/management_controller')

// определям маршрут для функции создания
router.post('/task', task_controller.createTask)
// определям маршрут для функции возвращения всех "задач"
router.get('/task', task_controller.getTask)
// определям маршрут для функции возвращения конкретной "задачи"
router.get('/task/:id', task_controller.getOneTask)
// определям маршрут для функции обновления
router.put('/task', task_controller.updateTask)
// определям маршрут для функции удаления
router.delete('/task/:id', task_controller.deleteTask)

// на выходе получаем router, который и будем регистрировать
module.exports = router