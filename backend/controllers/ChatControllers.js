const Message = require("../model/Message");
const Conversation = require("../model/Conversation");
const CatchAsyncErrors = require("../middlewares/CatchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");

exports.createConversation = CatchAsyncErrors(async (req, res, next) => {
    const { receiverId } = req.body;
    const senderId = req.user._id.toString();
    if (!senderId || !receiverId) {
        return next(new ErrorHandler("Enter Both Fields"));
    }
    const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId] } });
    if (exist) {
        return res.status(200).send("Conversation Already Exists");
    } else {
        const conversation = new Conversation({ members: [senderId, receiverId] });
        await conversation.save();
        return res.status(200).send("Conversation saved successfully");
    }
})
exports.getConversation = CatchAsyncErrors(async (req, res, next) => {
    const receiverId = req.params.id;
    const senderId = req.user._id.toString();
    if (!senderId || !receiverId) {
        return next(new ErrorHandler("Enter Both Fields"));
    }
    const conversation = await Conversation.find({ members: { $all: [receiverId, senderId] } });
    res.json({ members: conversation, lastMessage: conversation.lastMessage });
})


exports.sendMessage = CatchAsyncErrors(async (req, res, next) => {
    const { conversationId, senderId, receiverId, text } = req.body;

    const currentConversation = await Conversation.findOne({ members: { $all: [receiverId, senderId] } });
    if (!currentConversation) {
        return next(new ErrorHandler("Conversation Not Found"));
    }
    if (!conversationId || !senderId || !receiverId || !text) {
        return next(new ErrorHandler("Complete All Fields"));
    }
    const message = new Message({
        conversationId, senderId, receiverId, text
    });
    currentConversation.lastMessage = message;
    await message.save();
    await currentConversation.save();

    return res.status(200).send(message);

})


exports.getMessages = CatchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return next(new ErrorHandler("Enter Conversation ID to get Messages."));
    }
    const messages = await Message.find({ conversationId: id });
    if (!messages) {
        return next(new ErrorHandler("No Messages Found"));
    }

    return res.status(200).json({ messages });

})