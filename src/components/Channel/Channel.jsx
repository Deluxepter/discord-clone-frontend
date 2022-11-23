import './Channel.css';
import {MdOutlineGrid3X3} from "react-icons/md";
import {IoSettingsSharp} from "react-icons/io5";
import {GiSpeaker} from "react-icons/gi";
import {useDispatch, useSelector} from "react-redux";
import {selectSelectedChannel, setSelectedChannel} from "../../redux/globalSlice";

export default function Channel(props){

    const dispatch = useDispatch()
    const selectedChannel = useSelector(selectSelectedChannel)

    return(
        <div
            className={`channel ${selectedChannel === props.channel.channel_id && "channel-selected"}`}
            onClick={() => dispatch(setSelectedChannel(props.channel.channel_id))}
        >
            { props.channel.type === "text" ?
                <MdOutlineGrid3X3 className="channel__grid-icon" size={20}/>
                :
                <GiSpeaker className="channel__grid-icon" size={22}/>
            }

            <div className="channel__title">
                { props.channel.name }
            </div>
            <IoSettingsSharp className="channel__settings-icon"/>
        </div>
    )
}