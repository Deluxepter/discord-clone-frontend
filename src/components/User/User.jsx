import './User.css';

export default function User(props){
    return(
        <div className="user">
            <div className="user__avatar">
                <img
                    className="user__avatar__icon" src={props.user.avatar_path}
                />
                <div className="user__avatar__status">
                    <div className={`user__avatar__status__icon user__avatar__status__icon-${props.user.status}`}>

                    </div>
                </div>
            </div>
            <div className="user__info">
                <p className="user__info__username">
                    {props.user.name}
                </p>
                <p className="user__info__description">
                    {props.user.status !== "offline" && props.user.description}
                </p>
            </div>
        </div>
    )
}