import s from './Profile.module.css'
import Post from "./Post/Post";
import {addNewPostActionCreator, updateNewPostActionCreator} from "../../redux/message-reducer";



const Profile = (props) => {
    let newPost = props.NewPostMessage
    let addPost = () => {
        props.dispatch(updateNewPostActionCreator(newPost))
        props.dispatch(addNewPostActionCreator())
    }
    let onPostChange = (e) => {
        newPost = e.target.value
        props.dispatch(updateNewPostActionCreator(newPost))
    }

    return (
        <div className={s.content}>
            <div className={s.addUser}>
                <textarea cols="60" rows="5" value={props.NewPostMessage} onChange={onPostChange}/>
                <button className={s.addUserButton} onClick={addPost}>Add Post</button>
            </div>

            {props.messagesPage.Posts.map(profile => <Post name={profile.name} profession={profile.profession}
                                                    text={profile.text}/>)}
        </div>
    );
}

export default Profile;