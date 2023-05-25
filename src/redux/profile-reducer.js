const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"

const profileReducer = (state, action) => {
    if (action.type === "ADD-NEW-MESSAGE") {
        let newMessage = {id: 6, text: state.NewMessage}
        state.Message.push(newMessage)
    } else if (action.type === "UPDATE-NEW-MESSAGE") {
        state.NewMessage = action.newText
    }
    return state;
}

export const addNewMessageCreator = () => ({type : ADD_NEW_MESSAGE})
export const updateNewMessageCreator = (text) => ({type : UPDATE_NEW_MESSAGE, newText: text})

export default profileReducer;