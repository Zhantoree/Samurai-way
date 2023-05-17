import s from './Profile.module.css'
import Post from "./Post/Post";



const Profile = (props) => {
    return (
        <div className={s.content}>
            {props.Profiles.map(profile => <Post name={profile.name} profession={profile.profession} text={profile.text}/>)}
        </div>
    );
}

export default Profile;