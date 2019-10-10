import mongoConnection from '../mongoConnect/mongoDB'
import { validatorResult, errorFormat } from '../middlewares/validatorResult'

const insertTopic = (req, res) => {
    return mongoConnection(async(db) => {

        const errors = validatorResult(req)
        if (!errors.isEmpty()) {
            return errorFormat(errors, res)
        }

        const { title, name } = req.body

        const data = {
            title,
            name,
            create_time: new Date()
        }

        const respone = await db.collection('topic').insertOne(data)

        res.json({ success : true, respone })
    })
}

const getTopics = (req, res) => {
    return mongoConnection(async(db) => {
        const respone = await db.collection('topic').find().toArray()
        res.json({ success : true, respone })
    })
}

export {
    insertTopic,
    getTopics
}
