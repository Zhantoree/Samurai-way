import s from '../Dialgos.module.css'
import {NavLink} from "react-router-dom";

export default function MessageItems(props) {
    return (
        <div>
            <div className={s.message_item}>{props.message_text}</div>
        </div>
    );
}
