import User from '../models/userModel.js'
import bcrypt from "bcrypt"; 
import jwt from "jsonwebtoken";

// Genrate a token jwt 

const generatetoken = (userId) => {
    return jwt.sign({id: userId}, process.env.JWT_SECRET, {expiresIn: '7d'})
}


export const registerUser = async (req , res) => {
    try{
        const {name, email, password } = req.body

        
        // check if user already exists
        const userExists = await User.findOne({email})

        if(userExists){
            return res.status(400).json({message: 'User already exists'})
        } 
        if(password.length < 8){
            return res.status(400).json({success: false, message: "Password must be atleast of 8 charactors"})
        }
//hasing password

const salt = await bcrypt.genSalt(10)
const hashedpassword = await bcrypt.hash(password , salt)

// create a User
const user = await User.create({
    name,
    email,
    password: hashedpassword
})
res.status(201).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    token: generatetoken(user._id)
})



    }catch(error){

        res.status(500).json({
            message: "Server error",
            error: error.message
        })
    }
}

// Login Function 

export const loginUser = async (req, res) =>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email})

        if(!user) {
            return res.status(500).json({message: "Invalid email or password"})
        }

        // compare the password

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
             return res.status(500).json({message: "Invalid email or password"})
        }
        res.stauts(201).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    token: generatetoken(user._id)
})

    }catch(error){
    res.status(500).json({
            message: "Server error",
            error: error.message
        })
    }
}

// Getuser profile function 

export const getUserprofile = async (req, res) => {
    try{

        const user = await User.findById(req.user.id).select("-password")

        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        res.json(user)

    }catch(error){
           res.status(500).json({
            message: "Server error",
            error: error.message
        })

    }
    
}