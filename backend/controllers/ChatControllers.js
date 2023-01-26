const Message = require("../model/Message");
const Conversation = require("../model/Conversation");
const CatchAsyncErrors = require("../middlewares/CatchAsyncErrors");

exports.createConversation = CatchAsyncErrors(async (req, res, next) => {
    const { senderId, receiverId } = req.body;

    const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId] } });
    if (exist) {
        return res.status(200).send("Conversation Already Exists");
    } else {
        const conversation = new Conversation({ members: [senderId, receiverId] });
        await conversation.save();
        return res.status(200).send("Conversation saved successfully");
    }
})