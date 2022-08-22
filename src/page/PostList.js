import {useNavigate, useParams} from "react-router-dom";
import NavBar from "../component/NavBar";
import React from "react";
import {Button, Pagination} from "react-bootstrap";
import useGetPostList from "../service/post/PostListService";
import PostListItem from "../component/post/PostListItem";

export default function PostList({postListName}) {
    const {page} = useParams()
    const navigate = useNavigate()

    const {posts, total} = useGetPostList(page, postListName)
    const endPage = Math.ceil(total / 20)

    return (
        <div>
            <NavBar
                transparent={false}
                lightText={false}
            />

            <div className="container justify-content-center" style={{marginTop: "7rem"}}>
                <div className="text-center"><h3><strong>{postListName}</strong></h3></div>

                <div className="d-flex mt-5 w-100 justify-content-center">
                    <input type="text" id="search"
                           className="form-control text-dark rounded-pill px-3 py-1 w-50"
                           placeholder="제목, 내용, 작성자로 검색"/>
                    <Button className="rounded-pill text-white ms-3 material-symbols-outlined shadow">search</Button>
                </div>

                <a className="px-3 mt-2" href={"/edit"}>글쓰기</a>

                <div className="mt-2">
                    <div className="border-top"></div>
                    <div className="px-3">
                        {
                            posts.map((post, index) => {
                                return <div>
                                    <PostListItem
                                        id={index + 1 + 20 * (page - 1)}
                                        title={post.title}
                                        authorName={post.user.name}
                                        tags={post.tags}
                                        time={post.time}
                                        visit={post.visit}
                                        favorites={post.favorite}
                                        onClick={() => navigate("/post/" + post.id)}
                                    ></PostListItem>
                                    {
                                        index < posts.length &&
                                        <div className="border-top"></div>
                                    }
                                </div>
                            })
                        }
                    </div>

                </div>

                <div className="d-flex mt-5 w-100 justify-content-center">
                    <Pagination>
                        <Pagination.First onClick={() => navigate("/posts/1")}/>
                        {
                            page > 1 && <Pagination.Prev onClick={() => navigate("/posts/" + (parseInt(page) - 1))}/>
                        }
                        {
                            page > 3 && <Pagination.Item onClick={() => navigate("/posts/1")}>{1}</Pagination.Item>
                        }
                        {
                            page > 3 && <Pagination.Ellipsis />
                        }
                        {
                            generate5PageNums(page, endPage).map((pg) => {
                                return <Pagination.Item active={page == pg} onClick={() => navigate("/posts/" + pg)}>{pg}</Pagination.Item>
                            })
                        }
                        {
                            page < endPage - 2 && <Pagination.Ellipsis />
                        }
                        {
                            page < endPage - 2 && <Pagination.Item onClick={() => navigate("/posts/" + endPage)}>{endPage}</Pagination.Item>
                        }
                        {
                            page < endPage && <Pagination.Next onClick={() => navigate("/posts/" + (parseInt(page) + 1))}/>
                        }
                        <Pagination.Last onClick={() => navigate("/posts/" + endPage)} />
                    </Pagination>
                </div>
            </div>
        </div>
    )
}

function generate5PageNums(page, endPage) {
    var startPage = page - 2;

    if(startPage < 1) startPage = 1
    else if(startPage + 4 >= endPage) startPage = endPage - 4

    return [...Array(endPage > 5 ? 5 : endPage).keys()].map(i => i + startPage)
}