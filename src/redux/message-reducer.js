const ADD_NEW_POST = "ADD-NEW-POST"
const UPDATE_NEW_POST = "UPDATE-NEW-POST"

let initialState =  {
    Posts: [{
        name: "Vasya Pupkin", profession: "Kotlin Dev", text: "It's so hot now ;("
    }, {
        name: "Vladilen Minin", profession: "JS Dev", text: "Hello guys, how are u today?"
    }],
    NewPostMessage: ''
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-NEW-POST":
            let newPost = {
                name: "John Doe",
                profession: "Kotlin Dev",
                text: state.NewPostMessage
            }
            state.Posts.push(newPost)
            break;
        case "UPDATE-NEW-POST":
            state.NewPostMessage = action.newText;
            break;
    }
    return state;
}

export const addNewPostActionCreator = () => ({type: ADD_NEW_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST, newText: text})

export default messageReducer;