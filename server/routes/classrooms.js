// Instantiate router - DO NOT MODIFY
const express = require('express');
const router = express.Router();

// Import model(s)
const { Classroom } = require('../db/models');
const { Op } = require('sequelize');

// List of classrooms
router.get('/', async (req, res, next) => {
    let errorResult = { errors: [], count: 0, pageCount: 0 };

    // Phase 6B: Classroom Search Filters
    /*
        name filter:
            If the name query parameter exists, set the name query
                filter to find a similar match to the name query parameter.
            For example, if name query parameter is 'Ms.', then the
                query should match with classrooms whose name includes 'Ms.'

        studentLimit filter:
            If the studentLimit query parameter includes a comma
                And if the studentLimit query parameter is two numbers separated
                    by a comma, set the studentLimit query filter to be between
                    the first number (min) and the second number (max)
                But if the studentLimit query parameter is NOT two integers
                    separated by a comma, or if min is greater than max, add an
                    error message of 'Student Limit should be two integers:
                    min,max' to errorResult.errors
            If the studentLimit query parameter has no commas
                And if the studentLimit query parameter is a single integer, set
                    the studentLimit query parameter to equal the number
                But if the studentLimit query parameter is NOT an integer, add
                    an error message of 'Student Limit should be a integer' to
                    errorResult.errors 
    */
    const where = {};

    // Your code here
    if(req.query.name){
        where.name = {
            [Op.like]: `%${req.query.name}%`
        }
    }

    if(req.query.studentLimit){
        const limits = req.query.studentLimit.split(',');
        if(limits.length !== 2 || +limits[0] > +limits[1]){
            errorResult.errors.push({
                message: "Student Limit should be two numbers: min,max"
            })
        }else{
            where.studentLimit = {
                [Op.between]: limits
            }
        }
    }

    if(errorResult.errors.length){
        res.status(400);
        res.message = "Student Limit should be an integer";
        return res.json(errorResult);
    }

    const classrooms = await Classroom.findAll({
        attributes: [ 'id', 'name', 'studentLimit' ],
        where,
        // Phase 1B: Order the Classroom search results
        order: [['name', 'ASC']]
    });

    res.json(classrooms);
});

// Single classroom
router.get('/:id', async (req, res, next) => {
    let classroom = await Classroom.findByPk(req.params.id, {
        attributes: ['id', 'name', 'studentLimit'],
        // Phase 7:
            // Include classroom supplies and order supplies by category then
                // name (both in ascending order)
            // Include students of the classroom and order students by lastName
                // then firstName (both in ascending order)
                // (Optional): No need to include the StudentClassrooms
        // Your code here
        include: [
            {
                model: Supply,
                order: [['category', 'ASC'], ['name', 'ASC']]
            },
            {
                model: Student,
                order: [['lastname', 'ASC'], ['firstName'. 'ASC']]
            }
        ]
    });

    if (!classroom) {
        res.status(404);
        res.send({ message: 'Classroom Not Found' });
    }

    // Phase 5: Supply and Student counts, Overloaded classroom
        // Phase 5A: Find the number of supplies the classroom has and set it as
            // a property of supplyCount on the response
        // Phase 5B: Find the number of students in the classroom and set it as
            // a property of studentCount on the response
        // Phase 5C: Calculate if the classroom is overloaded by comparing the
            // studentLimit of the classroom to the number of students in the
            // classroom
        // Optional Phase 5D: Calculate the average grade of the classroom 
    // Your code here
    const numOfSupplies = await Classroom.count({
        include:
        {
            model: Supply
        },
        where: {
            id: req.params.id
        }
    })

    const numOfStudents = await Classroom.count({
        include:
        {
            model: Student
        },
        where: {
            id: req.params.id
        }
    })

    classroom.supplyCount = numOfSupplies;
    classroom.studentCount = numOfStudents;

    if (classroom.studentCount > classroom.studentLimit) {
        classroom.overloaded = true
    } else {
        classroom.overloaded = false
    }

    const averageGrade = await StudentClassroom.findOne({
        attributes: [
            [
                sequelize.fn("AVG", sequelize.col("StudentClassroom.grade")),
                "averageGrades"
            ]
        ],
        where: {
            id: req.params.id
        }
    });

    classroom.dataValues.supplyCount = numOfSupplies;
    classroom.dataValues.studentCount = numOfStudents;
    classroom.dataValues.overloaded = overloaded;
    classroom.dataValues.avgGrade = averageGrade.dataValues.averageGrades;

    res.json(classroom);
});

// Export class - DO NOT MODIFY
module.exports = router;