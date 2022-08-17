import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./page/Main"
import Signup from "./page/Signup";
import NotFound from "./page/error/404";
import Post from "./page/Post";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/post/:id" element={<Post />} />
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