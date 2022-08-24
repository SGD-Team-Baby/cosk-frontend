import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./page/Main"
import Signup from "./page/Signup";
import NotFound from "./page/error/404";
import Post from "./page/Post";
import Editor from "./page/Editor";
import React from "react";
import Login from "./page/Login";

import User from "./page/User";
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
                    <Route path="/posts/:page" element={<PostList postListName="전체 게시글"/>} />
                    <Route path="/edit" element={<Editor />} />
                    <Route path="/edit/:id" element={<Editor />} />
                    <Route path="/user/:username" element={<User />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;