import s from './Dialgos.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItems/DialogItems";
import MessageItems from "./MessageItems/MessageItems";
import {addNewMessageCreator, updateNewMessageCreator} from "../../redux/profile-reducer";

export default function Dialogs(props) {
    let newMessage = props.NewMessage
    let onMessageChange = (e) => {
        newMessage = e.target.value
        props.dispatch(updateNewMessageCreator(newMessage))
    }
    let onAddNewMessage = () => {
        props.dispatch(updateNewMessageCreator(newMessage))
        props.dispatch(addNewMessageCreator())
    }

    return (
        <>
            <div className={s.dialogs}>
                <div className={s.users}>
                    <div className={s.userNames}>
                        {props.profilePage.Dialog.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)}
                    </div>
                    <div className={s.messages}>
                        {props.profilePage.Message.map(message => <MessageItems message_text={message.text}/>)}
                    </div>
                </div>
                <div className={s.addNewMessage}>
                    <textarea cols="25" rows="3" onChange={onMessageChange}></textarea>
                    <button onClick={onAddNewMessage}>Add Message</button>
                </div>
            </div>

        </>

    );
}