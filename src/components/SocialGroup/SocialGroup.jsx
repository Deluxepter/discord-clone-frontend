import './SocialGroup.css';
import User from "../Person/User";
import {useEffect, useState} from "react";
import {server_users} from "../../mockData";


export default function SocialGroup(){

    const [users, setUsers] = useState()

    useEffect(() => {

    }, [])

    return(
        <div className="socialgroup">
            <p className="socialgroup__title">Engineers - 1</p>
            {users}
        </div>
    )
}