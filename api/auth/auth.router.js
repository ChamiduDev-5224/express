const {register} = require('./auth.controller');
const router = require('express').Router();

router.post('/register',register);
module.exports=router;