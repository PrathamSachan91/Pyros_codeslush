const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const User = require("../models/User");
dotenv.config();
const router = express.Router();
const Bank = require("../models/Bank");
import donor1 from "../public/donor1.png"
import donor2 from "../public/donor2.png"
import donor3 from "../public/donor3.png"
import donor4 from "../public/donor4.png"
import donor5 from "../public/donor5.png"
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
        image:donor1,
        age: 20,
        bloodGroup: "A+",
    },
    {
        name: "Pankaj Arora",
        image: donor2,
        age: 25,
        bloodGroup: "B+",
    },
    {
        name: "Paras Gupta",
        image: donor3,
        age: 22,
        bloodGroup: "O+",
    },
    {
        name: "Jimin",
        image: donor4,
        age: 20,
        bloodGroup: "AB+",
    },
    {
        name: "Aarav Sharma",
        image: donor5,
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
