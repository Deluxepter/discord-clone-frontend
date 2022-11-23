import './SocialBar.css';
import SocialCategory from "../SocialGroup/SocialGroup";
import {getOfflineUsers, getOnlineUsers} from "../../mockData";
import {useSelector} from "react-redux";
import {selectSelectedServer} from "../../redux/globalSlice";

export default function SocialBar(){

    const selectedServer = useSelector(selectSelectedServer)
    const onlineUsers = getOnlineUsers(selectedServer)
    const offlineUsers = getOfflineUsers(selectedServer)

    return(
        <div className="socialbar">
            <SocialCategory title="Online" users={onlineUsers}/>
            <SocialCategory title="Offline" users={offlineUsers}/>
        </div>
    )
}
