import s from './Siderbar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
            <div className={s.account}>
                <div className={s.profiles}>
                    <div className={s.profile}>
                        <img src={require('./assets/Profile_photo.png')} alt=""/>
                        <div className={s.profile_text}>
                            <h2>Karim Saif</h2>
                            <h3>UI/UX Designer</h3>
                        </div>
                    </div>
                </div>
                <div className={s.profiles_inner}>
                    <img src={require('./assets/Plus.png')} alt=""/>
                    <h3>Add another account</h3>
                </div>
            </div>
            <nav>
                <NavLink to="#" className={s.nav_inner}>
                    <img src={require('./assets/Play.png')} alt=""/>
                    <p>Learning</p>
                </NavLink>
                <NavLink to="#" className={s.nav_inner}>
                    <img src={require('./assets/Chart.png')} alt=""/>
                    <p>Insights</p>
                </NavLink>
            </nav>
            <div className={s.tags}></div>
        </div>
    );
}

export default Sidebar;