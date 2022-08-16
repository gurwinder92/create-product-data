const express = require('express')
const data = require('../services/user')
const router = express.Router()

router.post('/postproduct',data.postproduct)
router.get('/getproduct',data.getproduct)
router.put('/updateproduct',data.updateproduct)
router.delete('/deleteproduct',data.deleteproduct)




module.exports = router