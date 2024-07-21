const express = require("express");
const router = express.Router();
const Bank = require("../models/Bank");

const seedData = [
    {
        name: "Italian Delight",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
        age: 10,
        
        bloodGroup: "A+",
    },
    {
        name: "Seafood Paradise",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
        age: 15,
        bloodGroup: "B+",
    },
    {
        name: "Vegetarian Haven",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
        age: 12,
        bloodGroup: "O+",
    },
    {
        name: "Sizzling Steakhouse",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
        age: 20,
        bloodGroup: "AB+",
    },
    {
        name: "Asian Fusion",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
        age: 18,
        bloodGroup: "A-",
    }
];
// to avoid crashing the whole database when one of the data object does'nt gets inserted.
const options = { ordered: true };

const seedDatabase = async () => {
    try {
        await Bank.deleteMany(); 
        console.log("Inserting data:", seedData);
        await Bank.insertMany(seedData, options);
        console.log("Database seeded successfully.");
    } catch (error) {
        console.error("Error seeding the database:", error.message);
    }
};
seedDatabase();


router.get("/ruch", async(req, res) => {
    try {
        const donors= await Bank.find({});
        res.json(donors);
       
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
   
});

module.exports = router;
