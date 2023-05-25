import {addNewPostActionCreator, updateNewPostActionCreator} from "../../redux/message-reducer";



const Profile = (props) => {
    // let newPost = props.NewPostMessage
    let addPost = () => {
        props.store.dispatch(addNewPostActionCreator())
    }
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text))
    }

    return (
        <Profile updateNewPostText={onPostChange} addPost={addPost} posts={props.posts}/>
    );
}

export default Profile;