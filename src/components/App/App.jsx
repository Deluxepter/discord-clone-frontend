import './App.css';
import './normalize.css';
import ServerBar from "../ServerBar/ServerBar";
import GroupBar from "../GroupBar/GroupBar";
import Main from "../Main/Main";

export default function App() {
  return (
    <div className="app">
        <ServerBar/>
        <GroupBar/>
        <Main/>
    </div>
  );
}
