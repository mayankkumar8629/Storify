import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";
import express from "express";

export const signup = async(req,res) =>{
    try{
        const {name,email,password,address,contactNumber}=req.body;
        const existingUser=await User.findOne({email});
        //checking that user exists or not
        if(existingUser){
            return res.status(409).json({message:"User already exists"});
        }

        const hashedPassword=await bcrypt.hash(password,10);
        //creating new user
        const newUser= new User({
            name,
            email,
            password:hashedPassword,
            address,
            contactNumber
        });
        await newUser.save();
        res.status(201).json({
            message:"User registered successfully",
            user:{
                id:newUser._id,
                name:newUser.name,
                email:newUser.email,
                address:newUser.address,
                contact:newUser.contactNumber,
                createdAt:newUser.createdAt

                
            }
        });



    }catch(error){
        console.error("Error in registering user",error);
        res.status(500).json({message:"Error in registering user",error:error.message});
    }
}

export const login = async(req,res)=>{
    try{
        const {email,password}=req.body;
        //searching for the user
        const user=await User.findOne({email});
        if(!user){
            res.status(400).json({message:"User does not exists"});
        }

        //verifying the password
        const hashedPassword= user.password;
        const isMatch = await bcrypt.compare(password,hashedPassword);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const token = jwt.sign(
            {id:user._id,email:user.email,name:user.name},
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
        );
        console.log(token);
        res.json({message:"Login successfull",token});

    }catch(error){
        console.error("Login error",error);
        res.status(500).json({message:error.message});
    }

}