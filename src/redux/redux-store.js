import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer
})

let store = legacy_createStore(reducers)


export default store