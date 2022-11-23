import './Category.css';
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight, MdOutlineAdd} from "react-icons/md";
import {useEffect, useState} from "react";
import Channel from "../Channel/Channel";
import {getChannels, getCategory} from "../../mockData";

export default function Category(props){

    const [category, setCategory] = useState({});
    const [collapsed, setCollapsed] = useState(true);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        setCategory(getCategory(props.category.category_id))
        setChannels(getChannels(props.category.category_id).map(channel => <Channel key={channel.channel_id} channel={channel}/> ))
    }, [])

    const handleChildClick = event => {
        event.stopPropagation()
    }

    return(
        <div className="category">
            <div
                className="category__header"
                onClick={() => setCollapsed(prevState => !prevState)}
            >
                { collapsed ?
                    <MdOutlineKeyboardArrowDown className="category__header__collapse-icon" size={14}/>
                    :
                    <MdOutlineKeyboardArrowRight lassName="category__header__collapse-icon" size={14}/>
                }
                { category.name }
                <MdOutlineAdd onClick={handleChildClick} className="category__header__add-icon" size={20}/>
            </div>
            <div className="category__body">
                { collapsed && channels }
            </div>
        </div>
    )
}
