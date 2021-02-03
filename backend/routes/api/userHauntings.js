const express = require('express');
const router = express.Router();

const { UserHaunting } = require('../../db/models');
const asyncHandler = require('express-async-handler');

router.post('/', asyncHandler(async (req, res) => {
    const {userId, bookingStartDate, bookingEndDate, active} = req.body;
    const userHaunting = await UserHaunting.create({ userId, bookingStartDate, bookingEndDate, active});

    return res.json({userHaunting});
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const userHauntings = await PromiseRejectionEvent.findAll({
        where: {
            userId: req.params.id
        }
    })
    return res.json({userHauntings});
}));

module.exports = router;