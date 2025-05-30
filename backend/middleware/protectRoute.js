import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';



const protectRoute = async (req, res, next) => {
    try{
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"unauthorized no token provided"});
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({error:"unauthorized token not valid"});
        }

        const user=await User.findById(decoded._id).select("-password");
        if(!user){
            return res.status(404).json({error:"user not found"});
        }
        req.user=user;
        next();
    }
    catch(error){
        console.log("error in protectionRoute middleware",error.message);
        res.status(501).json({error:"internal server error"});
    }
}

export default protectRoute;