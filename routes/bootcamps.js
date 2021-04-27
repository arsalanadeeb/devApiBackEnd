const express = require('express');
const {getBootCamps,createBootCamp,updateBootCamp,deleteBootCamp} =require('../controller/controller');

const router = express.Router();
router
.route('/')
.get(getBootCamps)
.post(createBootCamp);

router
.route('/:id')
.put(updateBootCamp)
.delete(deleteBootCamp)

module.exports = router;