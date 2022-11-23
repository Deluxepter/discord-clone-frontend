import './App.css';
import './normalize.css';
import Serverbar from "../Serverbar/Serverbar";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";

export default function App() {

    return (
        <div className="app">
            <Serverbar/>
            <Sidebar/>
            <MainContent/>
        </div>
    );
}
