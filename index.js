const express = require('express')
// импортируем Router
const taskRouter = require('./routes/management_routes')
const workRouter = require('./routes/work_routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', taskRouter)
app.use('/api', workRouter)

app.listen(PORT, () => console.log('server started on post ${PORT}'))

