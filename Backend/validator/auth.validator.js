const { body } = require('express-validator');
exports.validateUserAuth = [

    body("username").exists({ checkNull: true }).withMessage('username cannot be null').bail().isString().withMessage('username must be a string').isLength({ min: 3, max: 30 }).withMessage('length must be between 3 to 30').bail().notEmpty().withMessage("Enter Valid Username"),

    body("password").exists({ checkNull: true }).withMessage(" password can't be null").bail().isLength({ min: 4, max: 12 }).isString().withMessage("password must be a string")
    
]