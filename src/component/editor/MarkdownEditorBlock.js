import React, {useEffect, useRef, useState} from "react";
import MDEditor from '@uiw/react-md-editor';
import {Overlay, OverlayTrigger, Tooltip} from "react-bootstrap";
import {useScroll} from "../../util/scroll";
import {useMousePosition} from "../../util/MousePosition";
import EditorOptions from "./EditorOptions";

export default function MarkdownEditorBlock({
                                                key,
                                                value,
                                                onChange,
                                                showOptions,
                                                isFirstPosition,
                                                isLastPosition,
                                                onMoveUp,
                                                onMoveDown,
                                                onDelete,
                                                onOptionsHoverStateChanged
                                            }) {

    const target = useRef(null)

    return (
        <div ref={target} data-color-mode="light" className="mt-3">
            <MDEditor
                key={key}
                className="pt-1 px-1 rounded-3"
                value={value}
                onChange={onChange}
            />
            <Overlay target={target.current} show={showOptions} placement="right">
                {({placement, arrowProps, show: _show, popper, ...props}) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            position: "absolute"
                        }}
                        onMouseOver={onOptionsHoverStateChanged(true)}
                        onMouseLeave={onOptionsHoverStateChanged(false)}
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