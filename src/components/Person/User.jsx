import './User.css';

export default function User(){
    return(
        <div className="person">
            <div className="person__avatar">
                <img
                    className="person__avatar__icon" src="https://cdn.discordapp.com/icons/362087919676030988/a_aaddf7875519acce6af8c8521e621532.webp?size=96"
                />
            </div>
            <div className="person__info">
                <p className="person__username">
                    skatina
                </p>
                <p className="person__status">

                </p>
            </div>
        </div>
    )
}