const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
const { Haunting } = require('../../db/models');
const asyncHandler = require('express-async-handler');


router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const hauntingId = parseInt(req.params.id, 10);
    console.log(hauntingId)
    const haunting = await db.Haunting.findByPk(hauntingId);
    console.log(haunting)
    res.json({haunting})
}));

module.exports = router;