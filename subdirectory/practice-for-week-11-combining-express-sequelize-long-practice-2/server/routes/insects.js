// Instantiate router - DO NOT MODIFY
const express = require('express');
const router = express.Router();

/**
 * INTERMEDIATE BONUS PHASE 2 (OPTIONAL) - Code routes for the insects
 *   by mirroring the functionality of the trees
 */
// Your code here

// List of insects returning id, name, and millimeters ordered by millimeters from smallest to largest
router.get('/', async (req, res, next) => {
    const insects = await Insect.findAll({
        attributes: ['id', 'name', 'millimeters'],
        order: [ ['millimeters'] ]
    });

    res.json(insects);
});

// Fetch an insect by id
router.get('/:id', async (req, res, next) => {
    const insect = await Insect.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!insect) {
        return res.status(404).json({
            status: 'error',
            message: 'Insect not found'
        });
    }

    res.json(insect);
});

// Create an insect
router.post('/', async (req, res, next) => {
    const insect = await Insect.create(req.body);

    res.json({
        status: 'success',
        message: 'Successfully created insect',
        data: insect
    });
});

// Delete an insect
router.delete('/:id', async (req, res, next) => {
    const insect = await Insect.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!insect) {
        return res.status(404).json({
            status: 'error',
            message: 'Insect not found'
        });
    }

    await insect.destroy();

    res.json({
        status: 'success',
        message: 'Successfully deleted insect'
    });
});

// Update an insect
router.put('/:id', async (req, res, next) => {
    const insect = await Insect.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!insect) {
        return res.status(404).json({
            status: 'error',
            message: 'Insect not found'
        });
    }

    await insect.update(req.body);

    res.json({
        status: 'success',
        message: 'Successfully updated insect',
        data: insect
    });
});

// Search for an insect by name
router.get('/search/:name', async (req, res, next) => {
    const insects = await Insect.findAll({
        where: {
            name: {
                [Op.like]: `%${req.params.name}%`
            }
        }
    });

    res.json(insects);
});

// Export class - DO NOT MODIFY
module.exports = router;