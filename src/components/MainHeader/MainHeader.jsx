import './MainHeader.css';
import {selectSelectedChannel} from "../../redux/globalSlice";
import {useSelector} from "react-redux";
import {getChannel} from "../../mockData";
import {MdInbox, MdOutlineGrid3X3} from "react-icons/md";
import {GiSpeaker} from "react-icons/gi";
import {BsPinAngleFill} from "react-icons/bs";
import {IoMdNotifications} from "react-icons/io";
import {IoHelpCircle, IoSearch} from "react-icons/io5";

export default function MainHeader(){

    const selectedChannel = useSelector(selectSelectedChannel)
    const channel = getChannel(selectedChannel)

    return(
        <div className="main-header">
            <div className="main-header__title">
                { channel.type === "text" ?
                    <MdOutlineGrid3X3 className="main-header__title__icon" size={26}/>
                    :
                    <GiSpeaker className="main-header__title__icon" size={26}/>
                }
                { channel.name }
            </div>
            <div className="main-header__divider"/>
            <div className="main-header__topic">
                {channel.topic}
            </div>
            <div className="main-header__actions">
                <IoMdNotifications
                    className="main-header__actions__icon"
                    size={24}
                />
                <BsPinAngleFill
                    className="main-header__actions__icon"
                    size={24}
                />
                <div className="main-header__actions__search">
                    <input
                        className="main-header__actions__search__input"
                        type="text"
                        placeholder="Search"
                    />
                    <IoSearch/>
                </div>
                <MdInbox
                    className="main-header__actions__icon"
                    size={25}
                />
                <IoHelpCircle
                    className="main-header__actions__icon"
                    size={26}
                />
            </div>
        </div>
    )
}