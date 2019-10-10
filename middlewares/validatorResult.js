import { validationResult } from 'express-validator/check'

const validatorResult = validationResult.withDefaults({
	formatter: (error) => {
		return {
			error_code: error.msg.error_code,
			error_message: error.msg.error_message,
			field: error.param
		}
	}
})

const errorFormat = (errors, res) => {
	const errorArray = errors.array()
	const firstError = errorArray[0]
	return res.status(200).json({ success: false, ...firstError})
}

module.exports = {
	errorFormat,
	validatorResult
}
