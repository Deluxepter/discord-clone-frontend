import './MainContent.css';
import MainHeader from "../MainHeader/MainHeader";
import SocialBar from "../SocialBar/SocialBar";
import Chat from "../Chat/Chat";

export default function MainContent(){
    return(
        <div className="main-content">
            <MainHeader/>
            <div className="main-content__section">
                <Chat/>
                <SocialBar/>
            </div>
        </div>
    )
}