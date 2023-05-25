import s from './Profile.module.css'
import Post from "./Post/Post";


const Profile = (props) => {
    let newPost = props.NewPostMessage
    let onAddPost = () => {
        // props.updateNewPostText(newPost)
        // props.dispatch(addNewPostActionCreator())
        props.addPost()
    }
    let onPostChange = (e) => {

        newPost = e.target.value
        // props.dispatch(updateNewPostActionCreator(newPost))
        props.updateNewPostText(newPost)
    }


    return (
        <div className={s.content}>
            <div className={s.addUser}>
                <textarea cols="60" rows="5" value={props.NewPostMessage} onChange={onPostChange}/>
                <button className={s.addUserButton} onClick={onAddPost}>Add Post</button>
            </div>
            
            {props.posts.map(profile => <Post name={profile.name} profession={profile.profession}
                                              text={profile.text}/>)}
        </div>
    );
}

export default Profile;