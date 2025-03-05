export const sendMessage=async(req,res)=>{
    try{
        const{message}=req.body;
        const {Id}=req.params;
        const senderId=req.userId;
    }
    catch(error){
        res.status(500).json({error:"internal server error"});
    }
    
};