import './Siderbar.css';
import {MdHeadphones, MdMic, MdOutlineKeyboardArrowDown, MdSettings} from "react-icons/md";
import Category from "../Category/Category";
import {useEffect, useState} from "react";
import {IoClose} from "react-icons/io5";
import {useDetectClickOutside} from "react-detect-click-outside";
import {getCategories, getServer, getUser} from "../../mockData";
import {useSelector} from "react-redux";
import {selectSelectedServer, selectUserID} from "../../redux/globalSlice";

export default function Sidebar(){

    const [title, setTitle] = useState("");
    const [categories, setCategories] = useState([]);

    const selectedServer = useSelector(selectSelectedServer)
    const userID = useSelector(selectUserID);
    const user = getUser(userID);

    useEffect(() => {
        setCategories(getCategories(selectedServer).map(category => <Category key={category.category_id} category={category}/>))
        setTitle(getServer(selectedServer).name)
    }, [selectedServer])

    const [dropdown, setDropdown] = useState(true);
    const ref = useDetectClickOutside({onTriggered: () => {setDropdown(true)}})

    return(
        <div className="sidebar">
            <div
                className="sidebar__header"
                onClick={() => setDropdown(prevState => !prevState)}
                ref={ref}
            >
                { title }
                { dropdown ?
                    <MdOutlineKeyboardArrowDown className="sidebar__header__icon" size={20}/>
                    :
                    <IoClose className="sidebar__header__icon" size={18}/>
                }
            </div>
            <div className="sidebar__categories">
                {categories}
            </div>
            <div className="sidebar__footer">
                <div className="sidebar__footer__user">
                    <div className="sidebar__footer__user__avatar">
                        <img
                            className="sidebar__footer__user__avatar__icon"
                            src={user.avatar_path}
                        />
                    </div>
                    <div className="sidebar__footer__user__info">
                        <p className="sidebar__footer__user__info__username">
                            {user.name}
                        </p>
                        <p className="sidebar__footer__user__info__status">
                            {`#${user.tag}`}
                        </p>
                    </div>
                </div>
                <div className="sidebar__footer__actions">
                    <MdMic className="sidebar__footer__actions__action" size={23}/>
                    <MdHeadphones className="sidebar__footer__actions__action" size={23}/>
                    <MdSettings className="sidebar__footer__actions__action" size={23}/>
                </div>
            </div>
            { dropdown ? null :
                <div className="sidebar__settings-dropdown">
                    settings
                </div>
            }
        </div>
    )
}