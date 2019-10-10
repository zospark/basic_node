import express from 'express'
import { insertTopic } from './models/topic'
import { addValidator } from './middlewares/validator'

const routes = express.Router()

routes.post('/', addValidator, insertTopic)

export default routes
