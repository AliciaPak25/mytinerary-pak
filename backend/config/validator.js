const joi = require('joi')

const validator = (req, res, next) => {
    const schema = joi.object({
        firstName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'The NAME must have at least 3 alphabetic characters',
            'string.max': "The NAME must have at most 20 alphabetic characters"
        }),

        lastName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min': 'The SURNAME must have at least 3 alphabetic characters',
            'string.max': "The SURNAME must have at most 20 alphabetic characters"
        }),

        email: joi.string().email({minDomainSegments: 2}).required().messages({
            'string.email': 'Invalid email address format'
        }),

        password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(6).max(30).messages({
            'string.min': 'Password must be at least 6 characters long and must have uppercase and lowercase characters and one numeric character.',
            'string.pattern': "Password must be alphanumeric and contain a number."
        }),
        //consultar photoURL
        photoURL: joi.string().required().trim(), //joi.string().uri({scheme: ['https://?']}).required(),
        
        country: joi.string().required(),

        from: joi.string(),
    })
    //y la validacion del log in?
    const validation = schema.validate(req.body.newUser, {abortEarly:false})
        console.log(req.body.newUser)
    if (validation.error) {
       
        return res.json({success: false, from: "validator", message:validation.error.details, test: validation})
        
    }
    
    next()
    
}

module.exports = validator
