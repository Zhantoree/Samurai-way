import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let store = {
    _state: {
        profilePage: {
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
        },
        messagesPage: {
            Posts: [{
                name: "Vasya Pupkin", profession: "Kotlin Dev", text: "It's so hot now ;("
            }, {
                name: "Vladilen Minin", profession: "JS Dev", text: "Hello guys, how are u today?"
            }],
            NewPostMessage: ''
        }
    },
    getState() {
        return this._state;
    },

    callSubscriber() {
        console.log("State changed")
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messageReducer(this._state.messagesPage, action)
        this.callSubscriber(this._state);
    }
}

export default store;