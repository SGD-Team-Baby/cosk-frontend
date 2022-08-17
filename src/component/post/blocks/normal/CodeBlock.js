import React from "react";
import {LightAsync as SyntaxHighlighter} from 'react-syntax-highlighter';
import {ocean} from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeBlock({code, language}) {
    return (
        <div className="mb-4">
            <span className="blockquote-footer">{language}</span>
            <SyntaxHighlighter className="rounded-3 shadow p-3" language={language} style={ocean} showLineNumbers={true}>
                {code}
            </SyntaxHighlighter>
        </div>
    )
}