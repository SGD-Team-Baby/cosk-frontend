import React, {useEffect, useRef, useState} from "react";
import MDEditor from '@uiw/react-md-editor';
import {Button, Overlay, OverlayTrigger, Tooltip} from "react-bootstrap";
import {useScroll} from "../../util/scroll";
import {useMousePosition} from "../../util/MousePosition";
import EditorOptions from "./EditorOptions";

var imageBlobGlobal = null

export default function ImageSelectorBlock({
                                               key,
                                               value,
                                               onChange,
                                               imageBlob,
                                               onImageChange,
                                               showOptions,
                                               isFirstPosition,
                                               isLastPosition,
                                               onMoveUp,
                                               onMoveDown,
                                               onDelete,
                                               onOptionsHoverStateChanged
                                           }) {

    const target = useRef(null)
    const imgUploadButton = useRef(null)
    const [imageSrc, setImageSrc] = useState();
    const [fileName, setFileName] = useState();

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result);
                resolve();
            };
        });
    };

    useEffect(() => {
        imageBlobGlobal = imageBlob
        imageBlob && setFileName(imageBlob.name.name)
        imageBlob ? encodeFileToBase64(imageBlob) : setImageSrc(null)

    }, [imageBlob])

    return (
        <div ref={target} data-color-mode="light" className="mt-3">
            <div
                key={key}
                className="pt-4 px-1 rounded-3 border text-center" style={{minHeight: "9rem"}}
            >
                <input type="file"
                       ref={imgUploadButton}
                       onChange={(e) => {
                           onImageChange(e.target.files[0])
                       }}
                       accept="image/jpg, image/png, image/jpeg"
                       style={{display: "none"}}/>
                <Button className="text-white btn-sm" onClick={() => {
                    imgUploadButton.current.click()
                }}>파일 선택</Button>
                <p className="text-secondary pt-1" style={{fontSize: "90%"}}>JPG, JPEG, PNG 파일만 업로드할 수 있습니다.</p>
                {
                    imageSrc && (
                        <div className="mb-3">
                            <img className="rounded-3 shadow" src={imageSrc} style={{maxWidth: "95%", maxHeight: "30vh"}}/>
                        </div>
                    )
                }

                <div className="border-top mx-3"></div>
                <form>
                    <input className="d-flex text-center"
                           style={{fontSize: "95%", width: "100%", background: "transparent", border: "none"}}
                           placeholder="이미지에 설명을 추가해 보세요"
                           value={value}
                           onChange={onChange}/>
                </form>
            </div>


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