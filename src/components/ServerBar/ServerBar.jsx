import './ServerBar.css'
import ServerIcon from "../ServerIcon/ServerIcon";
import {useEffect, useState} from "react";
import {IoAddOutline} from "react-icons/io5";
import {TiSocialFlickrCircular} from "react-icons/ti";
import {user_servers} from "../../mockData";

export default function ServerBar(){

    const [servers, setServers] = useState([])


    return(
        <div className="serverbar">
            <div className="serverbar__direct-messages">
                <TiSocialFlickrCircular className="serverbar__direct-messages__icon" size={28}/>
            </div>
            <hr data-tip="asdasd" className="serverbar__divider"/>
            {servers}
            <hr className="serverbar__divider"/>
            <div className="serverbar__add-server">
                <IoAddOutline className="serverbar__add-server__icon" size={28}/>
            </div>
        </div>
    )
}
