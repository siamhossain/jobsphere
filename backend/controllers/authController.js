import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password) {
            return res.status(400).json({success: false, message: "Required fields missing"});
        }

        existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({success: false, message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({ msg: "User registered successfully" });

        
    }
    catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
};