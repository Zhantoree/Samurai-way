const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"

let initialState = {
    Dialog: [{
        id: 1, name: "Andrew"
    }, {
        id: 2, name: "Sergey"
    }, {
        id: 3, name: "Ivan"
    }, {
        id: 4, name: "Azamat"
    }, {
        id: 5, name: "Vlad"
    }],
    Message: [{
        id: 1, text: "Hello"
    }, {
        id: 1, text: "How are u?"
    }, {
        id: 1, text: "Is it alright?"
    }, {
        id: 1, text: "What was the last project?"
    }, {
        id: 1, text: "Can u borrow me 5$?"
    },],
    NewMessage: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-NEW-MESSAGE":
            let newMessage = {id: 6, text: state.NewMessage}
            state.Message.push(newMessage)
            break;
        case "UPDATE-NEW-MESSAGE":
            state.NewMessage = action.newText
            break;
    }
    return state;
}

export const addNewMessageCreator = () => ({type : ADD_NEW_MESSAGE})
export const updateNewMessageCreator = (text) => ({type : UPDATE_NEW_MESSAGE, newText: text})

export default profileReducer;