require('dotenv').config()
const express = require('express')
const app = express()
const session = require('express-session')
const port = 3000
const router = express.Router()


const disciplinaController = require("./controllers/DisciplinaController")
const UserController = require('./controllers/UserController')

require("./database")

app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: false,
  name:"session.id",
  cookie: { 
      sameSite:true,
      maxAge: 60000
     }
}))

router.get('/', (req, res) => {
  res.send('Hello World!')
})


router.post('/registrarAluno', UserController.create)
router.post('/registrarProfessor', UserController.create)

router.post('/criaDisciplina', disciplinaController.create)
router.get('/mostraDisciplinas', disciplinaController.getAll)

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
