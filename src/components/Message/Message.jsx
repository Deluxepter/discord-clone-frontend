import './Message.css';
import {getUser} from "../../mockData";

export default function Message(props){

    const user = getUser(props.message.user_id)
    const type = props.message.type;

    switch (props.message.type){
        case "simple":
            return (
                <div className="message message-simple">
                    <div >
                        <p>{props.message.text}</p>
                    </div>
                </div>
            )
        default:
            return (
                <div className="message message-full">
                    <img
                        className="message__avatar"
                        src={user.avatar_path}
                    />
                    <div className="message__content">
                        <div className="message__content__header">
                            <div className="message__content__header__username">
                                {user.name}
                            </div>
                            <div className="message__content__header__time">
                                {props.message.time}
                            </div>
                        </div>
                        <div className="message__content__section">
                            { type === "image" ?
                                <img
                                    className="message__content__section__image"
                                    src={props.message.text}
                                />
                                :
                                props.message.text
                            }
                        </div>
                    </div>
                </div>
            )
    }
}