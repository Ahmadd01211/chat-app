import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try{
        const loggedInUserId = req.user._id;

        const filterdUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(filterdUsers);

    }catch(error){
        console.error("error in getUsersForSidebar function in user controller",error.message);
        res.status(500).json({error:"internal server error in user controller"});
    }
};