import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({_id:userId},process.env.JWT_SECRET,{expiresIn:"15d"});
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000,//milliseconds format
        httpOnly:true,//prevent xss attacks cross ite scripting attacks
        SameSite:"Strict",
        secure:process.env.NODE_ENV!=="development",
    });
};
export default generateTokenAndSetCookie;