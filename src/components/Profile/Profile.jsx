import s from './Profile.module.css'
import Post from "./Post/Post";

const Profile = () => {
    return (
        <div className={s.content}>
            <Post text={"For older *.doc documents, this was enough:\n" +
                "\n" +
                "                    header(\"Profile-Type: application/msword\");\n" +
                "                    What MIME type should I use for new .docx documents? Also, for pptx and xlsx documents?"}/>
            <Post text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
        </div>
    );
}

export default Profile;