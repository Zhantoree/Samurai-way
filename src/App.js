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
                        <Route path={'/'} element={<Profile messagesPage={props.appState.messagesPage} NewPostMessage={props.appState.messagesPage.NewPostMessage} dispatch={props.dispatch}/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs profilePage={props.appState.profilePage} dispatch={props.dispatch} NewMessage={props.appState.profilePage.NewMessage}/>}/>
                    </Routes>

                </div>
                <Recommend/>
            </div>
        </BrowserRouter>
    );
}


export default App;
