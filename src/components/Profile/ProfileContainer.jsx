import {addNewPostActionCreator, updateNewPostActionCreator} from "../../redux/message-reducer";
import Profile from "./Profile";



const ProfileContainer = (props) => {

    // let newPost = props.NewPostMessage
    let addPost = () => {
        props.store.dispatch(addNewPostActionCreator())
    }
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text))
    }

    return (
        <Profile updateNewPostText={onPostChange} addPost={addPost}  posts={props.store.getState().messagesPage.Posts}/>
    );
}

export default ProfileContainer;