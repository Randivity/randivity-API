const express = require('express')
const router = express.Router()

const list = require('./list')
const items = require('./items/router')

/**
 * List router connection
 * @memberof module:router~mainRouter
 * @inner
 * @namespace listRouter
 */

// Created router routes connection
router.get('', list.getLists)
router.post('', list.postList)
router.delete('', list.deleteList)

router.use('/items', items)

module.exports = router
