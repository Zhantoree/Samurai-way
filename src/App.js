import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Content/Profile";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <Profile/>
        </div>
    );
}


export default App;
