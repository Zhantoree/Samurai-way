import s from './Dialgos.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";

export default function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {props.state.Dialog.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={s.messages}>
                {props.state.Message.map(message => <MessageItems message_text={message.text}/>)}
            </div>
        </div>
    );
}