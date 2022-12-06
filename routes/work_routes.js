// получаем из express
const Router = require('express')
// создаем объект класа Router
const router = new Router()
//импортируем объект контроллера для использования функций
const work_controller = require('../controller/work_controller')
const task_controller = require("../controller/management_controller");

// определям маршрут для функции создания
router.post('/work', work_controller.createWork)

router.get('/work', work_controller.getWorksByTask)

// определям маршрут для функции обновления
router.put('/work', work_controller.updateWork)
// определям маршрут для функции удаления
router.delete('/work/:id', work_controller.deleteWork)






// на выходе получаем router, который и будем регистрировать
module.exports = router