const joi = require('joi')

const validator = (req, res, next) => {
    const schema = joi.object({
        fullName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({

        })
    })
    /* email: joi.string()
    password: joi.string().pattern */
}

