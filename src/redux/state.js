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
        if (action.type === "ADD-NEW-POST") {
            let newPost = {
                name: "John Doe",
                profession: "Kotlin Dev",
                text: this._state.messagesPage.NewPostMessage
            }
            this._state.messagesPage.Posts.push(newPost)
            this.callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST") {
            this._state.messagesPage.NewPostMessage = action.newText;
            this.callSubscriber(this._state);
        } else if(action.type === "ADD-NEW-MESSAGE") {
            let newMessage = { id: 6, text: this._state.profilePage.NewMessage}
            this._state.profilePage.Message.push(newMessage)
            this.callSubscriber(this._state);
        } else if(action.type === "UPDATE-NEW-MESSAGE"){
            this._state.profilePage.NewMessage = action.newText
            this.callSubscriber(this._state);
        }
    }
}

export const addNewPostActionCreator = () => ({type : "ADD-NEW-POST"})
export const addNewMessageCreator = () => ({type : "ADD-NEW-MESSAGE"})
export const updateNewPostActionCreator = (text) => ({type : "UPDATE-NEW-POST", newText: text})
export const updateNewMessageCreator = (text) => ({type : "UPDATE-NEW-MESSAGE", newText: text})


export default store;