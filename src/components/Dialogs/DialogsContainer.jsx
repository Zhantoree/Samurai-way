import {addNewMessageCreator, updateNewMessageCreator} from "../../redux/profile-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// export function DialogsContainer(props) {
//     let newMessage = props.store.getState().profilePage.NewMessage
//     let onMessageChange = (text) => {
//         props.store.dispatch(updateNewMessageCreator(text))
//     }
//     let onAddNewMessage = () => {
//         props.store.dispatch(updateNewMessageCreator(newMessage))
//         props.store.dispatch(addNewMessageCreator())
//     }
//
//     return (<Dialogs profilePage={props.store.getState().profilePage} updateNewMessage={onMessageChange} addNewMessage={onAddNewMessage}/>);
// }

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => {
            dispatch(updateNewMessageCreator(text))

        },
        addNewMessage: () => {
            dispatch(addNewMessageCreator())
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;