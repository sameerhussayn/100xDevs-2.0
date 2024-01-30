import express from 'express'
import mainRouter from './routes/index.js'
import cors from 'cors'
import 'dotenv/config.js'
import './db.js'

const port = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())


app.use('/api/v1', mainRouter )


app.listen(port, console.log(`Server started on ${port}`))

