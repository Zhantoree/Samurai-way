import {addNewPostActionCreator, updateNewPostActionCreator} from "../../redux/message-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";


const mapStateToProps = (state) => {
    return {
        posts: state.messagesPage.Posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostActionCreator(text))
        },
        addPost: () => {
            dispatch(addNewPostActionCreator())
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContainer;