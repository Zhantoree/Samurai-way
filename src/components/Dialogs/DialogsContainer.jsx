import {addNewMessageCreator, updateNewMessageCreator} from "../../redux/profile-reducer";
import Dialogs from "./Dialogs";




export default function DialogsContainer(props) {
    let newMessage = props.store.getState().profilePage.NewMessage
    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageCreator(text))
    }
    let onAddNewMessage = () => {
        props.store.dispatch(updateNewMessageCreator(newMessage))
        props.store.dispatch(addNewMessageCreator())
    }

    return (<Dialogs profilePage={props.store.getState().profilePage} updateNewMessage={onMessageChange} addNewMessage={onAddNewMessage}/>);
}