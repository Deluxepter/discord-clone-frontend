import './Header.css';
import {selectSelectedChannel} from "../../redux/globalSlice";
import {useSelector} from "react-redux";
import {getChannel} from "../../mockData";
import {MdInbox, MdOutlineGrid3X3} from "react-icons/md";
import {GiSpeaker} from "react-icons/gi";
import {BsPinAngleFill} from "react-icons/bs";
import {IoMdNotifications} from "react-icons/io";
import {IoHelpCircle, IoSearch} from "react-icons/io5";

export default function Header(){

    const selectedChannel = useSelector(selectSelectedChannel)
    const channel = getChannel(selectedChannel)

    return(
        <div className="header">
            <div className="header__title">
                { channel.type === "text" ?
                    <MdOutlineGrid3X3 className="header__title__icon" size={26}/>
                    :
                    <GiSpeaker className="header__title__icon" size={26}/>
                }
                { channel.name }
            </div>
            <div className="header__divider"/>
            <div className="header__topic">
                {channel.topic}
            </div>
            <div className="header__actions">
                <IoMdNotifications
                    className="header__actions__icon"
                    size={24}
                />
                <BsPinAngleFill
                    className="header__actions__icon"
                    size={24}
                />
                <div className="header__actions__search">
                    <input
                        className="header__actions__search__input"
                        type="text"
                        placeholder="Search"
                    />
                    <IoSearch/>
                </div>
                <MdInbox
                    className="header__actions__icon"
                    size={25}
                />
                <IoHelpCircle
                    className="header__actions__icon"
                    size={26}
                />
            </div>
        </div>
    )
}