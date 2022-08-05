import React from "react";
import {Container} from "react-bootstrap";
import TopInfo from "./blocks/normal/TopInfo";
import MarkdownTextBlock from "./blocks/normal/MarkdownTextBlock";
import NavBar from "../NavBar";
import SignupForm from "../signup/SignupForm";
import ImageBlock from "./blocks/normal/ImageBlock";


/**
 * title="asdf"
 * contents
 * @param props
 * @constructor
 */
export default function Post({user, title, contents, comments, favorites, time}) {
    return (

        <div>

            <NavBar
                transparent={false}
                lightText={false}
            />

            <div className="container justify-content-center" style={{marginTop: "7rem"}}>
                <TopInfo title={title} name={user.name} time={time} favorites={favorites}/>
                <div className="container pt-3 border-top" style={{height:"0.1rem"}}></div>
                <ImageBlock src="https://source.unsplash.com/random" description="Unsplach Random Image" />
            </div>

        </div>
    )
}