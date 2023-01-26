const mongoose = require("mongoose");
mongoose.set('strictQuery', false);


const messageSchema = mongoose.Schema({
    conversationId: {
        type: String,
    },
    senderId: {
        type: String,
    },
    receiverId: {
        type: String,
    },
    text: {
        type: String,
    }
    , type: {
        type: String,
    },
}, {
    timestamps: true
});

const Message= mongoose.model("Message", messageSchema);

module.exports = Message;
