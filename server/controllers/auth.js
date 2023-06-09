import bcrypt from 'bcrypt';
// this send the user a web token for the authhorization
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

// Register user  
//asnycronous , call mongoose database 
export const register = async (req, res) => {

    try{
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
        } = req.body;

        // these line below are hashing the password

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password : passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile:mathfloor(math.random() * 1000),
            impressions: math.floor(math.random() * 1000),
        });

        const savedUser = await newUser.save();
        
        res.status(201).json(savedUser);

    } catch (err) {

        res.status(500).json({ error: err.message });


    }

}



/* LOGGING IN */
export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) return res.status(400).json({ msg: "User does not exist. " });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      delete user.password;
      res.status(200).json({ token, user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    };