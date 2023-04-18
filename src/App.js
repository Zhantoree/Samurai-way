import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Tech/>
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href="#">Home</a>
            <a href="#">News</a>
            <a href="#">Messages</a>
        </div>
    );
}

const Tech = () => {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    );
}

export default App;
