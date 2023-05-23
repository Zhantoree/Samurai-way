import s from './Profile.module.css'
import Post from "./Post/Post";
import React from "react";

const Profile = (props) => {
    let newPost = React.createRef();
    let addPost = () => {
        let text = newPost.current.value;
        props.addPost(text)
        newPost.current.value = '';
    }

    return (
        <div className={s.content}>
            <div className={s.addUser}>
                <textarea cols="60" rows="5" ref={newPost}></textarea>
                <button className={s.addUserButton} onClick={addPost}>Add Post</button>
            </div>

            {props.state.Posts.map(profile => <Post name={profile.name} profession={profile.profession}
                                                    text={profile.text}/>)}
        </div>
    );
}

export default Profile;