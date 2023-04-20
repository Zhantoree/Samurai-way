import s from "./Header.module.css"

const Header = () => {
    return (
        <div className={s.Header}>
            <div className={s.icon}>
                <p>Mercury<span>UM</span></p>
            </div>
            <nav>
                <div className={s.nav_item}>
                    <a href="#">
                        <img src={require("./assets/home_icon_active.png")} alt=""/>
                    </a>
                </div>
                <div className={s.nav_item}>
                    <a href="#">
                        <img src={require("./assets/friends_icon.png")} alt=""/>
                    </a>
                </div>
                <div className={s.nav_item}>
                    <a href="#">
                        <img src={require("./assets/work_icon.png")} alt=""/>
                    </a>
                </div>
                <div className={s.nav_item}>
                    <a href="#">
                        <img src={require("./assets/notification_icon.png")} alt=""/>
                    </a>
                </div>
                <div className={s.nav_item}>
                    <a href="#">
                        <img src={require("./assets/chat_icon.png")} alt=""/>
                    </a>
                </div>
                <div className={s.nav_item}>
                    <a href="#">
                        <img src={require("./assets/profile_icon.png")} alt=""/>
                    </a>
                </div>
            </nav>
            <div className={s.search}></div>
        </div>
    );
}

export default Header;