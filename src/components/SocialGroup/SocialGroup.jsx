import './SocialGroup.css';
import User from "../User/User";

export default function SocialCategory(props){

    let users = props.users.map(user => <User user={user}/>)

    return(
        <div className="socialgroup">
            <p className="socialgroup__title">{props.title} - {props.users.length}</p>
            {users}
        </div>
    )
}