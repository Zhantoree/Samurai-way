import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useState} from "react";

const Header = () => {
    let [activePage, setActivePage] = useState('profile')

    return (
        <div className={s.Header}>
            <div className={s.icon}>
                <p>Mercury<span>UM</span></p>
            </div>
            <nav className={s.nav}>
                <div className={s.nav_item}>
                    <NavLink to="/" onClick={() =>{if(activePage!=='profile'){setActivePage('profile')}}}>
                        <img src={activePage ==='profile' ? require("./assets/home_icon_active.png") : require("./assets/home_icon.png")}/>
                    </NavLink>
                </div>
                <div className={s.nav_item}>
                    <NavLink to="/dialogs" onClick={() => {if(activePage!=='dialogs'){setActivePage('dialogs')}}}>
                        <img src={activePage === 'dialogs' ? require("./assets/friends_icon_active.png") : require("./assets/friends_icon.png")} alt={"lala"}/>
                    </NavLink>
                </div>
                <div className={s.nav_item}>
                    <NavLink to="/users">
                        <img src={require("./assets/profile_icon.png")} alt=""/>
                    </NavLink>
                </div>
                <div className={s.nav_item}>
                    <NavLink to="/work" onClick={() => {if(activePage!=='work'){setActivePage('work')}}}>
                        <img src={activePage === 'work' ? require("./assets/work_icon_active.png") : require("./assets/work_icon.png")} alt=""/>
                    </NavLink>
                </div>
                <div className={s.nav_item}>
                    <NavLink to="/notification" onClick={() => {if(activePage!=='notification'){setActivePage('notification')}}}>
                        <img src={activePage === 'notification' ? require("./assets/notification_icon_active.png") : require("./assets/notification_icon.png")} alt=""/>
                    </NavLink>
                </div>
                <div className={s.nav_item}>
                    <NavLink to="/chat" onClick={() => {if(activePage!=='chat'){setActivePage('chat')}}}>
                        <img src={activePage === 'chat' ? require("./assets/chat_icon_active.png") : require("./assets/chat_icon.png")} alt=""/>
                    </NavLink>
                </div>
            </nav>
            <div className={s.search}>
                <input type="text" placeholder={"Search for anything (Jobs)"}/>
                <img src={require("./assets/seach_icon.png")} alt=""/>
            </div>
        </div>
    );
}

export default Header;