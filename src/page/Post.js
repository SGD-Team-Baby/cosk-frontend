import React from "react";
import NavBar from "../component/NavBar";
import useGetPost from "../service/post/PostService";
import {useParams} from "react-router-dom";
import PostContent from "../component/post/blocks/PostContent";
import uploadComment from "../service/uploadComment";
import ShareModal from "../component/post/ShareModal";
import {useScreenshot} from "../util/Screenshot";
import {useRef, useState} from "react";
import sendImage from "../service/image/SendImage";
import useFavoriteClick from "../service/post/FavoriteClick";
import clickFavorite from "../service/post/FavoriteClick";


/**
 * title="asdf"
 * contents
 * @param props
 * @constructor
 */
export default function Post() {

    const params = useParams()
    const post = useGetPost(params.id)

    const [screenshot, takeScreenshot, error] = useScreenshot()
    const screenshotRef = useRef()
    const [modalShow, setModalShow] = useState(false)

    return (
        <div ref={screenshotRef}>
            <NavBar
                transparent={false}
                lightText={false}
            />

            <div className="container justify-content-center" style={{marginTop: "7rem"}}>
                <PostContent
                    id={params.id}
                    title={post.title}
                    username={post.username}
                    time={post.time}
                    tags={post.tags}
                    visit={post.visit}
                    favorites={post.favorites}
                    contents={post.contents}
                    childPosts={post.child}
                    comments={post.comments}
                    onFavoritesClick={() => {
                        clickFavorite({postId:params.id});
                    }}
                    onNewComment={(postId, commentId, str) => {
                        if (commentId === -1) {
                            uploadComment(postId, str)
                        }
                    }}
                onShareClick={() => setModalShow(true)}/>
            </div>

            <ShareModal show={modalShow} onClose={() => setModalShow(false)} onShare={(email) => {
                takeScreenshot(screenshotRef.current).then(r =>
                    sendImage({email:email, image:r})
                )
            }}/>
        </div>
    )
}