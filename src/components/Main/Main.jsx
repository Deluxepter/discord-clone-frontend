import './Main.css';
import MainHeader from "../MainHeader/MainHeader";
import SocialBar from "../SocialBar/SocialBar";
import ChatContainer from "../ChatContainer/ChatContainer";

export default function Main(){
    return(
        <div className="main">
            <MainHeader/>
            <div className="main__section">
                <ChatContainer/>
                <SocialBar/>
            </div>
        </div>
    )
}