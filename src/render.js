import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addPost} from "./redux/state";

export let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<React.StrictMode>
        <App appState={state} addPost={addPost}/>
    </React.StrictMode>);
}

