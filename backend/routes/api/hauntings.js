const express = require('express');
const router = express.Router();

const { Haunting } = require('../../db/models');
const asyncHandler = require('express-async-handler');


router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const id = parseInt(req.params.id, 10);
    console.log(id)
    const haunting = await Haunting.findOne({
        where: {
            id,
        }
    });
    console.log(haunting)
    res.json({haunting});
}));

router.get('/', asyncHandler(async(req, res) => {
    const hauntings = await Haunting.findAll({ limit: 4 });
    res.json(hauntings);
})),


module.exports = router;