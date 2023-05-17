import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let Dialog = [{
    id: 1, name: "Andrew"
}, {
    id: 2, name: "Sergey"
}, {
    id: 3, name: "Ivan"
}, {
    id: 4, name: "Azamat"
}, {
    id: 5, name: "Vlad"
}]


let Message = [{
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

let Profiles = [{
    name: "Vasya Pupkin", profession: "Kotlin Dev", text: "It's so hot now ;("
}, {
    name: "Vladilen Minin", profession: "JS Dev", text: "Hello guys, how are u today?"
}]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <App Dialog={Dialog} Message={Message} Profiles={Profiles}/>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
