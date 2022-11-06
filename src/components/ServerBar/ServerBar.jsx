import './ServerBar.css'
import ServerIcon from "../ServerIcon/ServerIcon";
import {useEffect, useState} from "react";
import {IoAddOutline} from "react-icons/io5";
import {TiSocialFlickrCircular} from "react-icons/ti";

export default function ServerBar(){

    const [servers, setServers] = useState([])

    useEffect(() => {
        setServers(serversData.list.map(server => <ServerIcon server={server}/>
        ))
    },[])

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

const serversData = {
    list: [
        {
            "id": "server1",
            "server_name": "Better Call Saul",
            "image_link": "https://cdn.discordapp.com/icons/362087919676030988/a_aaddf7875519acce6af8c8521e621532.webp?size=96"
        },
        {
            "id": "server2",
            "server_name": "Memeology",
            "image_link": "https://cdn.discordapp.com/icons/270613445177638922/97d782796be41221d331b11c8ef4ad3c.webp?size=96"
        },
        {
            "id": "server3",
            "server_name": "Phas",
            "image_link": "https://cdn.discordapp.com/icons/435431947963990026/a_413e9ba7f99ad564e919a4fbac085d0d.webp?size=96"
        },
    ]
}