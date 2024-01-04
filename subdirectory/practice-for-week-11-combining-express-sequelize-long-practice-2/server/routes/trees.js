// Instantiate router - DO NOT MODIFY
const express = require('express');
const router = express.Router();

/**
 * BASIC PHASE 1, Step A - Import model
 */
// Your code here
const {Trees} = require('../models');
/**
 * INTERMEDIATE BONUS PHASE 1 (OPTIONAL), Step A:
 *   Import Op to perform comparison operations in WHERE clauses
 **/
// Your code here
const {Op} = require('sequelize');
/**
 * BASIC PHASE 1, Step B - List of all trees in the database
 *
 * Path: /
 * Protocol: GET
 * Parameters: None
 * Response: JSON array of objects
 *   - Object properties: heightFt, tree, id
 *   - Ordered by the heightFt from tallest to shortest
 */
router.get('/', async (req, res, next) => {
    // let trees = [];

    // Your code here
    try {
        let trees = await Tree.findAll({
            attributes: ['heightFt', 'tree', 'id'],
            order: [
                ['heightFt', 'DESC']
            ]
        });
        res.json(trees);
    } catch (err) {
        next(err);
    }

    // res.json(trees);
});

/**
 * BASIC PHASE 1, Step C - Retrieve one tree with the matching id
 *
 * Path: /:id
 * Protocol: GET
 * Parameter: id
 * Response: JSON Object
 *   - Properties: id, tree, location, heightFt, groundCircumferenceFt
 */
router.get('/:id', async (req, res, next) => {
    let tree;

    try {
        // Your code here
        tree = await Tree.findOne({
            where: { id: req.params.id },
            attributes: ['id', 'tree', 'location', 'heightFt', 'groundCircumferenceFt']
        });

        if (tree) {
            res.json(tree);
        } else {
            next({
                status: "not-found",
                message: `Could not find tree ${req.params.id}`,
                details: 'Tree not found'
            });
        }
    } catch(err) {
        next({
            status: "error",
            message: `Could not find tree ${req.params.id}`,
            details: err.errors ? err.errors.map(item => item.message).join(', ') : err.message
        });
    }
});

/**
 * BASIC PHASE 2 - INSERT tree row into the database
 *
 * Path: /trees
 * Protocol: POST
 * Parameters: None
 * Request Body: JSON Object
 *   - Properties: name, location, height, size
 * Response: JSON Object
 *   - Property: status
 *     - Value: success
 *   - Property: message
 *     - Value: Successfully created new tree
 *   - Property: data
 *     - Value: object (the new tree)
 */
router.post('/', async (req, res, next) => {
    try {
        const {name, location, height, size} = req.body;

        const newTree = await Tree.create({
            name: name,
            location: location,
            height: height,
            size: size
        })
        res.json({
            status: "success",
            message: "Successfully created new tree",
            data: newTree
        });
    } catch(err) {
        next({
            status: "error",
            message: 'Could not create new tree',
            details: err.errors ? err.errors.map(item => item.message).join(', ') : err.message
        });
    }
});

/**
 * BASIC PHASE 3 - DELETE a tree row from the database
 *
 * Path: /trees/:id
 * Protocol: DELETE
 * Parameter: id
 * Response: JSON Object
 *   - Property: status
 *     - Value: success
 *   - Property: message
 *     - Value: Successfully removed tree <id>
 * Custom Error Handling:
 *   If tree is not in database, call next() with error object
 *   - Property: status
 *     - Value: not-found
 *   - Property: message
 *     - Value: Could not remove tree <id>
 *   - Property: details
 *     - Value: Tree not found
 */
router.delete('/:id', async (req, res, next) => {
    try {
        const tree = await Tree.findByPk(req.params.id);
        if (!tree) {
            return next({
                status: "not-found",
                message: Could not remove tree ${req.params.id},
                details: "Tree not found"
            });
        }
        await tree.destory();
        res.json({
            status: "success",
            message: `Successfully removed tree ${req.params.id}`,
        });
    } catch(err) {
        next({
            status: "error",
            message: `Could not remove tree ${req.params.id}`,
            details: err.errors ? err.errors.map(item => item.message).join(', ') : err.message
        });
    }
});

/**
 * INTERMEDIATE PHASE 4 - UPDATE a tree row in the database
 *   Only assign values if they are defined on the request body
 *
 * Path: /trees/:id
 * Protocol: PUT
 * Parameter: id
 * Request Body: JSON Object
 *   - Properties: id, name, location, height, size
 * Response: JSON Object
 *   - Property: status
 *     - Value: success
 *   - Property: message
 *     - Value: Successfully updated tree
 *   - Property: data
 *     - Value: object (the updated tree)
 * Custom Error Handling 1/2:
 *   If id in request params does not match id in request body,
 *   call next() with error object
 *   - Property: status
 *     - Value: error
 *   - Property: message
 *     - Value: Could not update tree <id>
 *   - Property: details
 *     - Value: <params id> does not match <body id>
 * Custom Error Handling 2/2:
 *   If tree is not in database, call next() with error object
 *   - Property: status
 *     - Value: not-found
 *   - Property: message
 *     - Value: Could not update tree <id>
 *   - Property: details
 *     - Value: Tree not found
 */
router.put('/:id', async (req, res, next) => {
    try {
        // Your code here
        const { id } = req.params;
        const {name, location, height, size} = req.body;
        
        if(id !== req.params.id){
            return next({
                status: 'error',
                message: `Could not update tree ${id}`
                details: `${id} does not match ${req.body.id}`
            });
        }

        const updatedTree = await Tree.findByPk(id)..then(async tree => {
            if(!tree){
                return next({
                    status: 'not-found',
                    message: `Could not update ${id}`,
                    details: 'Tree not found'
                });
            }
            
            tree.name = name,
            tree.location = location,
            tree.height = height,
            tree.size = size;

            return await tree.save();
            
        });

        res.json({
            status: 'Success',
            message: 'Successfully updated tree',
            data: updatedTree
        })

    } catch(err) {
        next({
            status: "error",
            message: 'Could not update new tree',
            details: err.errors ? err.errors.map(item => item.message).join(', ') : err.message
        });
    }
});

/**
 * INTERMEDIATE BONUS PHASE 1 (OPTIONAL), Step B:
 *   List of all trees with tree name like route parameter
 *
 * Path: /search/:value
 * Protocol: GET
 * Parameters: value
 * Response: JSON array of objects
 *   - Object properties: heightFt, tree, id
 *   - Ordered by the heightFt from tallest to shortest
 */
router.get('/search/:value', async (req, res, next) => {
    // let trees = [];
    try {
        const trees = Tree.findAll({
            where: {
                name: {
                    [Op.like]: `${req.params.value}`
                }
            },
            order:[
                ['height', 'DESC']
            ]
        });

        if (!trees) {
            return next({
                status: "not-found",
                message: `Could not find trees with name like ${req.params.value}`,
                details: "No trees were found with that name"
            });
        }
    
        res.json(trees.map(tree => ({
            heightFt: `${tree.height}ft`,
            tree: tree.name,
            id: tree.id
        })));

    } catch(err) {
        next({
            status: "error",
            message: `Could not find trees with name like ${req.params.value}`,
            details: err.message
        });
    }
    

    // res.json(trees);
});

// Export class - DO NOT MODIFY
module.exports = router;