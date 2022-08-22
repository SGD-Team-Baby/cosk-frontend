import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./page/Main"
import Signup from "./page/Signup";
import NotFound from "./page/error/404";
import Post from "./page/Post";
import Editor from "./page/Editor";
import React from "react";
import Login from "./page/Login";
import PostList from "./page/PostList";

function App() {

    return (
        <div className="App">
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0"/>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="/posts/:page" element={<PostList />} />
                    <Route path="/edit" element={<Editor />} />
                    <Route path="/edit/:id" element={<Editor />} />
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