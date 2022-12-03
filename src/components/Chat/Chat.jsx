import './Chat.css';
import {RiAddCircleFill, RiFileGifFill, RiStickyNoteFill} from "react-icons/ri";
import {BsFillEmojiSunglassesFill} from "react-icons/bs";
import {FaStickyNote} from "react-icons/fa";
import {useSelector} from "react-redux";
import {selectSelectedChannel} from "../../redux/globalSlice";
import {getChannel, getMessages} from "../../mockData";
import Message from "../Message/Message";

export default function Chat(){

    const selectedChannel = useSelector(selectSelectedChannel)
    const channel = getChannel(selectedChannel)
    const messages = getMessages(selectedChannel).map(message => <Message message={message}/>)

    return(
        <div className="chat">
            <div className="chat__messages">
                { messages }
            </div>
            <div className="chat__form">
                <RiAddCircleFill
                    className="chat__form__icon"
                    size={24}
                />
                <input
                    className="chat__form__input"
                    placeholder={`Message #${channel.name}`}
                />
                <RiFileGifFill
                    className="chat__form__icon"
                    size={23}
                />
                <FaStickyNote
                    className="chat__form__icon"
                    size={23}
                />
                <BsFillEmojiSunglassesFill
                    className="chat__form__icon"
                    size={23}
                />
            </div>
        </div>
    )
}