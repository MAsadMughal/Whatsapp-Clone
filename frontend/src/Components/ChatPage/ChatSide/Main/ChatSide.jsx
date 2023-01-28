import { LockReset } from '@mui/icons-material';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../../../actions/MessageActions';
import Loader from '../../../Loader/Loader';
import "../../ChatPage.css";
import DateForChat from '../Chat/DateForChat';
import MainInput from '../Chat/MainInput/MainInput';
import TopBar from '../Chat/TopBar';
import ReceivedMessage from '../Messages/ReceivedMessage';
import SentMessage from '../Messages/SentMessage';
import "./Chat.css"
import formatAMPM from './Dateformatter';

const ChatSide = () => {
    const [open, setOpen] = useState(false);
    const conversation = useSelector(state => state.currentConversation)
    const { user } = useSelector(state => state.user)
    const conLoading = conversation.loading;
    const [success, setSuccess] = useState(false);
    const { messages, loading } = useSelector(state => state.messages);
    const dispatch = useDispatch();
    const scrollRef = useRef(null);
    useEffect(() => {
        setSuccess(conversation?.success);
        if (conversation?.success) {
            dispatch(getMessages(conversation?.currentConvo?._id));
        }
    }, [conversation])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behaviour: 'smooth' });
    }, [messages])




    return (<>
        {success ?
            <div id='chatBoxSide'>
                <TopBar setOpen={setOpen} conversationUser={conversation?.currentConvo} />
                {conLoading || loading ? <Loader /> :
                    <div id='MessagesWrapper'>
                        <div id='encrypted'>
                            <LockReset /> Messages and calls are end-to-end encrypted. No one out of this chat Not even Whatsapp can read or listen to them. Tap to learn more.
                        </div>
                        {messages && messages.map((item, ind) => {
                            var date = new Date(item.createdAt);
                            var prevDate = new Date(messages[ind !== 0 && ind - 1]?.createdAt);
                            const prevMonth = prevDate.toLocaleString('default', { month: 'short' });
                            const prevYear = prevDate.toLocaleString('default', { year: 'numeric' });
                            const prevDay = prevDate.getDate() + " " + prevMonth + " " + prevYear;

                            const time = formatAMPM(date);
                            const month = date.toLocaleString('default', { month: 'short' });
                            const year = date.toLocaleString('default', { year: 'numeric' });
                            const day = date.getDate() + " " + month + " " + year;

                            return (
                                <div id="allMessages" key={ind}>
                                    {(prevDay !== day || ind === 0) && <DateForChat dateforMessage={day} />}
                                    {item.senderId === user._id ?
                                        <div key={ind} id='sentSideDiv'>
                                            <SentMessage style={{ float: "right" }} image={user.imageUrl} text={item.text} time={time} />
                                            <div ref={scrollRef}></div>
                                        </div>
                                        : item.senderId === conversation?.currentConvo?._id ? <div key={ind} id='receivedSideDiv'>
                                            <ReceivedMessage text={item.text} image={conversation?.currentConvo?.imageUrl} time={time} />
                                            <div ref={scrollRef}></div>
                                        </div>
                                            : null
                                    }</div>)
                        })}
                    </div>
                }
                <MainInput toUser={conversation?.currentConvo} />
            </div> : <div id='chatBoxSide'>
            </div>}
    </>
    )
}

export default ChatSide