const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const User = require("../models/User");
const Bank = require("../models/Bank");

dotenv.config();

const router = express.Router();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD
    }
});

const seedData = [
    {
        name: "Tushar Mehta",
        image: "https://github.com/agarwal12ruch/Pyros_codeslush/blob/main/backend/public/donor2.jpg?raw=true",
        age: 20,
        bloodGroup: "A+",
    },
    {
        name: "Pankaj Arora",
        image: "https://github.com/agarwal12ruch/Pyros_codeslush/blob/main/backend/public/donor1.png?raw=true",
        age: 25,
        bloodGroup: "B+",
    },
    {
        name: "Paras Gupta",
        image: "https://github.com/agarwal12ruch/Pyros_codeslush/blob/main/backend/public/donor3.jpg?raw=true",
        age: 22,
        bloodGroup: "O+",
    },
    {
        name: "Jimin",
        image: "https://github.com/agarwal12ruch/Pyros_codeslush/blob/main/backend/public/donor5.jpeg?raw=true",
        age: 20,
        bloodGroup: "AB+",
    },
    {
        name: "Aarav Sharma",
        image: "https://raw.githubusercontent.com/agarwal12ruch/Pyros_codeslush/main/backend/public/donor4.webp",
        age: 28,
        bloodGroup: "A-",
    }
];

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
        const user = await User.findOne({ email: userEmail });
        console.log(user);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        await sendMailToUser(user.email, res);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
});

module.exports = router;