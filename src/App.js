import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./page/Main"
import Signup from "./page/Signup";
import NotFound from "./page/error/404";
import Post from "./component/post/Post";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/post" element={<Post user={{name: "asdf"}} title="이건 좀 너무한거 아니냐고 야발" favorites="4" time="2022년 8월 5일 금요일 오후 11:58"/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

/*


    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
    </header>
*/