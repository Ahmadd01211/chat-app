export const sendMessage=async(req,res)=>{
    try{
        const{message}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._Id;
    }
    catch(error){
        res.status(500).json({error:"internal server error"});
    }
    
}