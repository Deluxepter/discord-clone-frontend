import './Category.css';
import {MdOutlineKeyboardArrowDown, MdOutlineAdd} from "react-icons/md";
import {useEffect, useState} from "react";
import Channel from "../Channel/Channel";
import {getChannels, getCategory} from "../../mockData";

export default function Category(props){

    const [channels, setChannels] = useState([]);
    const [category, setCategory] = useState({});

    useEffect(() => {
        setCategory(getCategory(props.category.category_id))
        setChannels(getChannels(props.category.category_id).map(channel => <Channel channel={channel}/> ))
    }, [])

    return(
        <div className="category">
            <div className="category__header">
                <MdOutlineKeyboardArrowDown className="category__header__collapse-icon" size={14}/>
                {category.name}
                <MdOutlineAdd className="category__header__add-icon" size={20}/>
            </div>
            <div className="category__body">
                {channels}
            </div>
        </div>
    )
}
