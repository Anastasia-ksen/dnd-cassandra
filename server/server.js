const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

const app = express()

// configure server
app.set('port', process.env.PORT || 3000)

// set static dir
app.use(express.static(path.join(__dirname, 'public')))

// get root page
app.get('/', (req, res) => {
  res.type('text/plain')
  res.render(path.join(__dirname, 'public', 'index.html'))
})

// пользовательская страница 404
app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 — Не найдено')
})
// пользовательская страница 500
app.use((err, req, res /* next */) => {
  console.error(err.stack)
  res.type('text/plain')
  res.status(500)
  res.send('500 — Ошибка сервера')
})

app.listen(app.get('port'), () => {
  console.log(`[OK] Server is running on localhost: ${app.get('port')}`)
})

// create connection to data base
mongoose
  .connect('mongodb://localhost:27017/dnd', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => console.error(err))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

// import API
app.use('/api/books', require('./routes/books'))

const db = mongoose.connection
db.on('error', () => {
  console.error('connection error!')
})
db.once('open', () => {
  console.log('[OK] DB is connected')
})
