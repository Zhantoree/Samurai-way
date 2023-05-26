import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App appState={store.getState()} store={store} dispatch={store.dispatch.bind(store)}/>
        </Provider>

    </React.StrictMode>);

console.log(store.getState())


reportWebVitals();
