import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoConnection from './mongoConnect/mongoDB'
import { xxx } from './mongoConnect/xxx'
import { insertTopic, getTopics } from './models/topic'
import topicRoutes from './routes'
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/topic', topicRoutes)

app.post('/user', async(req, res) => {
    return mongoConnection(async(db) => {
        const { username, password } = req.body

        const data = {
            username,
            password
        }

        const respone = await db.collection('user2').insertOne(data)

        res.json({ success : true, respone })
    })
})

app.post('/insert', insertTopic)

app.get('/get_all', getTopics)

app.listen(3000, () => {
    console.log('Start server at port 3000.');
})
