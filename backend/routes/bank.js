const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const User = require("../models/User");
dotenv.config();
const router = express.Router();
const Bank = require("../models/Bank");

// Nodemailer transporter setup
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD
    }
});

const seedData = [
    {
        name: "Tushar Mehta",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
        age: 20,
        bloodGroup: "A+",
    },
    {
        name: "Pankaj Arora",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
        age: 25,
        bloodGroup: "B+",
    },
    {
        name: "Paras Gupta",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
        age: 22,
        bloodGroup: "O+",
    },
    {
        name: "Jimin",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
        age: 20,
        bloodGroup: "AB+",
    },
    {
        name: "Aarav Sharma",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240110004602/pexels-chan-walrus-958545-(1).jpg",
        age: 28,
        bloodGroup: "A-",
    }
];

// To avoid crashing the whole database when one of the data objects doesn't get inserted.
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

router.get("/ruch", async (req, res) => {
    try {
        const donors = await Bank.find({});
        res.json(donors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const sendMailToUser = async (email, res) => {
    try {
        const mailOptions = {
            from: process.env.USER_EMAIL,
            to: email,
            subject: "DonorDue Blood Bank Service",
            html: `<p>We are pleased to help you. Please send your address and your requested blood unit will be delivered soon. Thank you.</p>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ success: false, message: "Failed to send email", error: error.message });
            } else {
                console.log(info.response);
                return res.status(200).json({ success: true, message: "Email sent successfully" });
            }
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
};

router.post("/selectdonor", async (req, res) => {
    const { userEmail } = req.body;

    try {
        // Fetch the user's information by email
        const user = await User.findOne({ email: userEmail });
        console.log(user);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Send an email to the user
        await sendMailToUser(user.email, res);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
});

module.exports = router;
