import './Channel.css';
import {MdOutlineGrid3X3} from "react-icons/md";
import {IoSettingsSharp} from "react-icons/io5";
import {GiSpeaker} from "react-icons/gi";

export default function Channel(props){
    return(
        <div className="channel">
            { props.channel.type === "text" ?
                <MdOutlineGrid3X3 className="channel__grid-icon" size={20}/>
                :
                <GiSpeaker className="channel__grid-icon" size={22}/>
            }

            <div className="channel__title">
                {props.channel.name}
            </div>
            <IoSettingsSharp className="channel__settings-icon"/>
        </div>
    )
}