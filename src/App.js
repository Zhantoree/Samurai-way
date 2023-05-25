import s from './App.module.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Recommend from "./components/Recomend/Recommend";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import ProfileContainer from "./components/Profile/ProfileContainer";

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
                        <Route path={'/'} element={<ProfileContainer posts={props.appState.messagesPage.Posts} messagesPage={props.appState.messagesPage} NewPostMessage={props.appState.messagesPage.NewPostMessage} dispatch={props.dispatch}/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs profilePage={props.appState.profilePage} dispatch={props.dispatch} NewMessage={props.appState.profilePage.NewMessage}/>}/>
                    </Routes>

                </div>
                <Recommend/>
            </div>
        </BrowserRouter>
    );
}


export default App;
