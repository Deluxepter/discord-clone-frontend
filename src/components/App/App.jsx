import './App.css';
import './normalize.css';
import Serverbar from "../Serverbar/Serverbar";
import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";
import SocialBar from "../SocialBar/SocialBar";
import Header from "../Header/Header";

export default function App() {

    return (
        <div className="app">
            <Serverbar/>
            <Sidebar/>
            <Chat/>
            <SocialBar/>
            <Header/>
        </div>
    );
}
