import s from './App.module.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Recommend from "./components/Recomend/Recommend";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={s.Header}>
                <Header/>
            </div>
            <div className={s.content}>
                <Sidebar/>
                <div className={s.content_wrapper}>
                    <Routes>
                        <Route path={'/*'} element={<Profile Profiles={props.Profiles}/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs Dialog={props.Dialog} Message={props.Message} />}/>
                    </Routes>

                </div>
                <Recommend/>
            </div>
        </BrowserRouter>
    );
}


export default App;
