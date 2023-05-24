import s from './Profile.module.css'
import Post from "./Post/Post";
import React, {useState} from "react";
import {addNewPostActionCreator, updateNewPostActionCreator} from "../../redux/state";



const Profile = (props) => {
    let [value, setValue] = useState(props.NewPostMessage)

    let addPost = () => {
        props.dispatch(updateNewPostActionCreator(value))
        props.dispatch(addNewPostActionCreator())
        setValue('')
    }
    let onPostChange = (e) => {
        setValue(e.target.value)

    }

    return (
        <div className={s.content}>
            <div className={s.addUser}>
                <textarea cols="60" rows="5" value={value} onChange={onPostChange}/>
                <button className={s.addUserButton} onClick={addPost}>Add Post</button>
            </div>

            {props.messagesPage.Posts.map(profile => <Post name={profile.name} profession={profile.profession}
                                                    text={profile.text}/>)}
        </div>
    );
}

export default Profile;