// Instantiate router - DO NOT MODIFY
const express = require('express');
const router = express.Router();

// Import models - DO NOT MODIFY
const { Insect, Tree } = require('../db/models');
const { Op } = require("sequelize");

/**
 * PHASE 7 - Step A: List of all trees with insects that are near them
 *
 * Approach: Eager Loading
 *
 * Path: /trees-insects
 * Protocol: GET
 * Response: JSON array of objects
 *   - Tree properties: id, tree, location, heightFt, insects (array)
 *   - Trees ordered by the tree heightFt from tallest to shortest
 *   - Insect properties: id, name
 *   - Insects for each tree ordered alphabetically by name
 */
router.get('/trees-insects', async (req, res, next) => {
    let trees = [];

    const trees = await Tree.findAll({
        include: [
            {
                model: Insect,
                as: 'insects',
                attributes: ['id', 'name'],
                through: {attributes: []}
            }
        ],
        attributes: ['id', 'tree', 'location', 'heightFt'],
        order: [ ['heightFt', 'DESC'] ],
    });
    for (let i = 0; i < trees.length; i++) {
        const tree = trees[i];
        let insects = tree.insects;
        insects.sort((a, b) => a.name > b.name ? 1 : -1);
        payload.push({
            id: tree.id,
            tree: tree.tree,
            location: tree.location,
            heightFt: tree.heightFt,
            insects: insects.map((insect) => ({id: insect.id, name: insect.name})),
        });
    }
    
    res.json(trees);
});

/**
 * PHASE 7 - Step B: List of all insects with the trees they are near
 *
 * Approach: Lazy Loading
 *
 * Path: /insects-trees
 * Protocol: GET
 * Response: JSON array of objects
 *   - Insect properties: id, name, trees (array)
 *   - Insects for each tree ordered alphabetically by name
 *   - Tree properties: id, tree
 *   - Trees ordered alphabetically by tree
 */
router.get('/insects-trees', async (req, res, next) => {
    let payload = [];

    const insects = await Insect.findAll({
        attributes: ['id', 'name', 'description'],
        include: [{
            model: Tree,
            attributes: ['id', 'tree']
        }],
        order: [ 
            ['name'],
            [Tree, 'tree']
        ],
    });
    for (let i = 0; i < insects.length; i++) {
        const insect = insects[i];
        payload.push({
            id: insect.id,
            name: insect.name,
            description: insect.description,
            tree: insect.Trees.map(tree => ({
                id: tree.id,
                tree: tree.true
            }))
        });
    }

    res.json(payload);
});

/**
 * ADVANCED PHASE 3 - Record information on an insect found near a tree
 *
 * Path: /associate-tree-insect
 * Protocol: POST
 * Parameters: None
 * Request Body: JSON Object
 *   - Property: tree Object
 *     with id, name, location, height, size
 *   - Property: insect Object
 *     with id, name, description, fact, territory, millimeters
 * Response: JSON Object
 *   - Property: status
 *     - Value: success
 *   - Property: message
 *     - Value: Successfully recorded information
 *   - Property: data
 *     - Value: object (the new tree)
 * Expected Behaviors:
 *   - If tree.id is provided, then look for it, otherwise create a new tree
 *   - If insect.id is provided, then look for it, otherwise create a new insect
 *   - Relate the tree to the insect
 * Error Handling: Friendly messages for known errors
 *   - Association already exists between {tree.tree} and {insect.name}
 *   - Could not create association (use details for specific reason)
 *   - (Any others you think of)
 */
// Your code here
router.post('/associate-tree-insect', (req, res, next) => {
    try {
        const treeData = req.body.tree;
        const insectData = req.body.insect;
    
        let tree = null;
        if(treeData.id){
            tree = await Trees.findOne({
                where: {
                    id: treeData.id
                }
            });
            if(!tree){
                return next({
                    status: 'not-found',
                    message: `Tree with ${treeData.id} was not found`
                });
            }
        } else {
            tree = await Trees.create(treeData);
        }
    
    
        let insect = null;
        if(insectData.id){
            insect = await Insect.findOne({
                where: {
                    id: insectData.id;
                }
            });
            if(!insect){
                return next({
                    status: 'not-found',
                    message: `Insect with id ${insectData.id} was not found`
                });
            }
        } else {
            insect = await Insect.create(insectData);
        }
    
        res.json({
            status: 'success',
            message: 'Successfully recorded information',
            data: {tree, insect}
        });

    } catch (error) {
        return next({
            status: 'error',
            message: 'Could not create association',
            details: error.message
        });
    }
})
// Export class - DO NOT MODIFY
module.exports = router;