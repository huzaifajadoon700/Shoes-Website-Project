
// import {GoogleUserModel} from '../models/google.js';
import {googleUser} from "../models/google.js"

import { signupmodel } from "../models/signup.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export const addsign = async (req, res) => {
  const userName =req.body.name;
  const userEmail = req.body.email;
  const userPhone =req.body.phonenumber;
  const userPassword = req.body.password;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userPassword, salt);

  const existingUser = await signupmodel.findOne({ email: userEmail });
  if (existingUser) return res.status(404).send("User already exist.");

  const newUser = new signupmodel({
    name: userName,
    email: userEmail,
    phonenumber: userPhone,
    password: hashedPassword
});
console.log(newUser);
await newUser.save();
}


// import GoogleUser from '../models/googleUsers.js';

export const addGoogleUserInDb = async (req, res) => {
    console.log('Google User Controller');
    const { name, email } = req.body;

    console.log(email + ' ' + name);

    try {
        // Check if the user already exists
        const existingUser = await googleUser.findOne({ email });

        if (existingUser) {
            // If user already exists, you may want to update or handle this case
            return res.status(400).json({ message: 'User already exists' });
        }

        // If the user doesn't exist, create a new user entry
        const newUser = new googleUser({
            fullName : name,
            email : email
        });

        // Save the new user to the database
        await newUser.save();

        // Respond with success message
        res.status(201).json({ message: 'User added successfully' });
    } catch (error) {
        // Handle any errors that occur during the process
        console.error('Error adding Google user:', error);
        res.status(500).json({ message: 'Error adding Google user' });
    }
};