import mongoose from "mongoose";
import Message from "./message.model";

const conversationSchema = new mongoose.Schema({

    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
            default: [],
        },
    ],
},{timestamp:true});

const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;