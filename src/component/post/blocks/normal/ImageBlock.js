import React from "react";

export default function ImageBlock({src, description}) {
    return (
        <div className="text-center mb-4">
            <img className="rounded-3 shadow" src={src} style={{maxWidth:"90vh", maxHeight: "50vh"}} />
            <p className="pt-2 small text-secondary">{description}</p>
        </div>
    )
}

/*


            <Overlay target={target.current} show={showTypes} placement="bottom">
                {({placement, arrowProps, show: _show, popper, ...props}) => (
                    <div
                        {...props}
                        style={{
                            borderRadius: 3,
                            ...props.style,
                        }}
                    >
                        <div className="rounded-3 border mx-2 mt-2 bg-white" style={{float: "left"}}>
                            <link rel="stylesheet"
                                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,0,0"/>

                            <span style={{cursor: "pointer"}}
                                  className="material-symbols-outlined m-2"
                                  onClick={() => addAndClose("md")}>description</span>
                            <span style={{cursor: "pointer"}}
                                  className="material-symbols-outlined m-2"
                                  onClick={() => addAndClose("img")}>image</span>
                            <span style={{cursor: "pointer"}}
                                  className="material-symbols-outlined m-2"
                                  onClick={() => addAndClose("code")}>code</span>
                        </div>
                    </div>
                )}
            </Overlay>
 */