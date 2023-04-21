import s from './App.module.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Recommend from "./components/Recomend/Recommend";

const App = () => {
    return (
        <div>
            <div className={s.Header}>
                <Header/>
            </div>
            <div className={s.content}>
                <Sidebar/>
                <Content/>
                <Recommend/>
            </div>
        </div>
    );
}


export default App;
