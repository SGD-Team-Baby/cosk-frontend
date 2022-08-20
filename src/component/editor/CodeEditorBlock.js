import React, {useEffect, useRef, useState} from "react";
import {Overlay, OverlayTrigger, Tooltip} from "react-bootstrap";
import EditorOptions from "./EditorOptions";
import CodeEditor from '@uiw/react-textarea-code-editor';
import CodeLanguageSelector from "./CodeLanguageSelector";

export default function CodeEditorBlock({
                                            key,
                                            value,
                                            onChange,
                                            showOptions,
                                            language,
                                            onLanguageChanged,
                                            isFirstPosition,
                                            isLastPosition,
                                            onMoveUp,
                                            onMoveDown,
                                            onDelete,
                                            onOptionsHoverStateChanged
                                        }) {

    const target = useRef(null)
    const overlayTarget = useRef(null)

    return (
        <div ref={target} data-color-mode="light" className="mt-3">
            <div>
                <CodeLanguageSelector
                    selectedLanguage={language}
                    onLanguageSelect={onLanguageChanged}/>

                <CodeEditor
                    key={key}
                    language={language}
                    className="rounded-3"
                    value={value}
                    style={{fontSize: "90%"}}
                    onChange={(e) => {
                        onChange(e.target.value)
                    }}
                />
            </div>


            <Overlay target={target.current} show={showOptions} placement="right">
                {({placement, arrowProps, show: _show, popper, ...props}) => (
                    <div
                        {...props}
                        onMouseOver={onOptionsHoverStateChanged(true)}
                        onMouseLeave={onOptionsHoverStateChanged(false)}
                        style={{
                            ...props.style,
                            position: "absolute"
                        }}
                    >
                        <EditorOptions
                            isFirstPosition={isFirstPosition}
                            isLastPosition={isLastPosition}
                            onMoveUp={onMoveUp}
                            onMoveDown={onMoveDown}
                            onDelete={onDelete}/>
                    </div>
                )}
            </Overlay>
        </div>
    )
}