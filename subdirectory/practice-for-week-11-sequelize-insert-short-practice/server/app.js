// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require('express-async-errors');
require('dotenv').config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require('./db/models');

// Index of all puppies - DO NOT MODIFY
app.get('/puppies', async (req, res, next) => {
    const allPuppies = await Puppy.findAll({order: [['name', 'ASC']]});

    res.json(allPuppies);
});

// Step 1: Build a new puppy
try{
    const puppy = await Puppy.build({
        name: 'Trudy',
        age_yrs: 2,
        weight_lbs: 38,
        breed: 'Brittany Spaniel',
        microchipped: false
    });
    await puppy.save();
    console.log('Puppy successfully build and saved to the database');
} catch (error){
    console.error('Error building and saving puppy:', error);
}

// Step 2: Create a new puppy
try {
    const puppy = await Puppy.create({
        name: 'Beans',
        age_yrs: 1.6,
        weight_lbs: 42,
        breed: 'Bulldog',
        microchipped: true
    });
    console.log('Puppy successfully build and saved to the database');
    
} catch (error) {
    console.error('Error building and saving puppy:', error);
}

// STEP 3
// Capture the name, age_yrs, breed, weight_lbs, and microchipped attributes
// from the body of the request.
// Use these values to create a new Puppy in the database.
// Respond to the request by sending a success message
app.post('/puppies', async (req, res, next) => {
    // Your code here
    try {
        const puppy = await Puppy.create({
            name: req.body.name,
            age_yrs: req.body.age_yrs,
            breed: req.body.breed,
            weight_lbs: req.body.weight_lbs,
            microchipped: req.body.microchipped
        });
        res.json({message: 'Puppy successfully build and saved to the database', data: puppy})
    } catch (error) {
        console.error('Error creating and saving puppy:', error);
        res.status(500).json({ message: 'Error creating puppy.' });
    }
})


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));