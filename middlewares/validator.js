import { check } from 'express-validator/check'

export const addValidator = [
    check('title').not().isEmpty(),
    check('name').not().isEmpty()
]
