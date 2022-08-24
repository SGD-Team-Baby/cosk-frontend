import React, {useRef, useState} from "react";
import {Overlay} from "react-bootstrap";

export default function AddButton({onAdd}) {
    const [showTypes, setShowTypes] = useState(false)
    const target = useRef()

    const addAndClose = (type) => {
        onAdd(type)
        setShowTypes(false)
    }

    return (
        <div className="mt-3 text-center">

            <div ref={target} className="rounded-3 text-center row align-items-center" style={{cursor: "pointer"}}
                 onClick={e => {
                     setShowTypes(!showTypes)
                 }}>
                <div className="col-5 border-top"/>
                <span className="col-2">
                    <div className="bg-white">
                            <span style={{cursor: "pointer"}}
                                  className="material-symbols-outlined px-2"
                                  onClick={() => addAndClose("text")}>description</span>
                            <span style={{cursor: "pointer"}}
                                  className="material-symbols-outlined px-2"
                                  onClick={() => addAndClose("img")}>image</span>
                            <span style={{cursor: "pointer"}}
                                  className="material-symbols-outlined px-2"
                                  onClick={() => addAndClose("code")}>code</span>
                        </div>
                </span>
                <div className="col-5 border-top"/>
            </div>

            <Overlay target={target.current} show={showTypes} placement="top">
                {({placement, arrowProps, show: _show, popper, ...props}) => (
                    <div
                        {...props}
                        style={{
                            position: "absolute",
                            ...props.style,
                        }}
                    >

                    </div>
                )}
            </Overlay>
        </div>


    )
}