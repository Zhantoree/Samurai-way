import s from '../Dialgos.module.css'
import {NavLink} from "react-router-dom";

export default function DialogItem(props) {
    let path = '/dialogs/' + props.id
    return (
        <div>
            <div className={s.user_item}><NavLink to={path}>{props.name}</NavLink></div>
        </div>
    );
}
