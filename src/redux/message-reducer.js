const ADD_NEW_POST = "ADD-NEW-POST"
const UPDATE_NEW_POST = "UPDATE-NEW-POST"

const messageReducer = (state, action) => {
    if (action.type === "ADD-NEW-POST") {
        let newPost = {
            name: "John Doe",
            profession: "Kotlin Dev",
            text: state.NewPostMessage
        }
        state.Posts.push(newPost)
    } else if (action.type === "UPDATE-NEW-POST") {
        state.NewPostMessage = action.newText;
    }
    return state;
}

export const addNewPostActionCreator = () => ({type: ADD_NEW_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text})

export default messageReducer;