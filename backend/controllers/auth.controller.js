import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup = async (req,res)=>{
    try{
        const {fullName,username,password,confirmpassword,gender}=req.body;
         if(password!==confirmpassword){
             return res.status(400).json({error:"passwords do not match"});
         }
         const user =await User.findOne({username});
         if(user){
            return res.status(400).json({error:"username already exists"}); }

        //hash password
        const salt=await bcrypt.genSalt(10);

        const hashedPassword=await bcrypt.hash(password,salt);



         //avatar-placeholder.iran.liara.run api for avatar
            const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
            const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`
            const newUser = new User({
                fullName,
                username,
                password:hashedPassword,
                gender,
                profilepic:gender==="male" ? boyProfilePic : girlProfilePic
            })
            

            if(newUser){
                generateTokenAndSetCookie(newUser._id,res);
                await newUser.save();
                res.status(201).json({
                    _id:newUser._id,
                    fullName:newUser.fullName,
                    username:newUser.username,
                    profilepic:newUser.profilepic});
            }
            else{
                res.status(400).json({error:"invalid user data"});
            }
        }
        catch(error){
            console.log("error in signup controller",error);
            res.status(500).json({error:"internal server error"});
        }
};

export const login =async (req,res)=>{
    try{
        const {username,password}=req.body;
        const user=await User.findOne({username});
        const isPasswordCorrect=await bcrypt.compare(password,user?.password||"");
        
        if(!user||!isPasswordCorrect){
            return res.status(400).json({error:"invalid username or password"});
        }
        generateTokenAndSetCookie(user._id,res);
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilepic:user.profilepic,
        });

    }
    catch(error){
        console.log("error in login controller",error.message);
        res.status(500).json({error:"internal server error"});

    };
    
};

export const logout =(req,res)=>{
    try{
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"logout successfully"});
    }
    catch(error){
        console.log("error in logout controller",error.message);
        res.status(500).json({error:"internal server error"});
    }
};




