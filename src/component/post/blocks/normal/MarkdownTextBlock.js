import React from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownTextBlock({text}) {
    return (
        <ReactMarkdown children={text} />
    )
}