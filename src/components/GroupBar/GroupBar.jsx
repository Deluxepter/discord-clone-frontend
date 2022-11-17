import './GroupBar.css';
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import Category from "../Category/Category";
import {useEffect, useState} from "react";
import {IoClose} from "react-icons/io5";
import {useDetectClickOutside} from "react-detect-click-outside";
import {getCategories, server_categories} from "../../mockData";

export default function GroupBar(props){


    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(getCategories(props.currentServerId).map(category => <Category category={category}/>))
    }, [])

    const [dropdown, setDropdown] = useState(true);
    const ref = useDetectClickOutside({onTriggered: () => {setDropdown(true)}})

    return(
        <div className="groupbar">
            <div
                className="groupbar__header"
                onClick={() => setDropdown(prevState => !prevState)}
                ref={ref}
            >
                { "testing" }
                { dropdown ?
                    <MdOutlineKeyboardArrowDown className="groupbar__header__icon" size={20}/>
                    :
                    <IoClose className="groupbar__header__icon" size={18}/>
                }
            </div>
            <div className="groupbar__categories">
                {categories}
            </div>
            <div className="groupbar__footer">
                Hello
            </div>
            { dropdown ? null :
                <div className="groupbar__settings-dropdown">
                    settings
                </div>
            }
        </div>
    )
}