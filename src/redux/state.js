let rerenderEntireTree = () => {
    console.log("State changed")
}

let state = {
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
        },]
    },
    messagesPage: {
        Posts: [{
            name: "Vasya Pupkin", profession: "Kotlin Dev", text: "It's so hot now ;("
        }, {
            name: "Vladilen Minin", profession: "JS Dev", text: "Hello guys, how are u today?"
        }],
        NewPostMessage: 'default'
    }
}

export const addPost = () => {
    let newPost = {
        name: "John Doe",
        profession: "Kotlin Dev",
        text: state.messagesPage.NewPostMessage
    }
    state.messagesPage.Posts.push(newPost)
    rerenderEntireTree(state)
}

export const updateNewPost = (updatedPost) => {
    state.messagesPage.NewPostMessage = updatedPost;
    rerenderEntireTree(state);
    console.log(state)
}

export let subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;