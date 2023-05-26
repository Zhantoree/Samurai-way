import s from './App.module.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Recommend from "./components/Recomend/Recommend";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

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
                        <Route path={'/'} element={<ProfileContainer store={props.store}/>}/>
                        <Route path={'/dialogs/*'} element={<DialogsContainer store={props.store}/>}/>
                    </Routes>

                </div>
                <Recommend/>
            </div>
        </BrowserRouter>
    );
}


export default App;
