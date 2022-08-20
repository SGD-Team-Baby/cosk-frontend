import {useEffect, useRef, useState} from "react";
import NavBar from "../component/NavBar";
import React from "react";
import MDEditor from '@uiw/react-md-editor';
import MarkdownEditorBlock from "../component/editor/MarkdownEditorBlock";
import {useMousePosition} from "../util/MousePosition";
import {useScroll} from "../util/scroll";
import debounce from "lodash/debounce";
import {v4 as uuidv4} from 'uuid';
import ImageSelectorBlock from "../component/editor/ImageSelectorBlock";
import AddButton from "../component/editor/AddButton";
import CodeEditorBlock from "../component/editor/CodeEditorBlock";
import TagBlock from "../component/editor/TagBlock";
import {Button} from "react-bootstrap";

export default function Editor() {

    const [title, setTitle] = useState("")
    const [blocks, setBlocks] = useState([])
    const [blockChangeFunctionTrigger, setBlockChangeFunctionTrigger] = useState(false)
    const [preventOptionChange, setPreventOptionChange] = useState(false)
    const [tags, setTags] = useState("")

    const blockRef = useRef([])
    const {scrollY} = useScroll()

    const addBlock = (index, type) => {
        let arrayLeft = blocks.slice(0, index + 1)
        let arrayRight = blocks.slice(index + 1)
        setBlocks([...arrayLeft,
            {
                uuid: uuidv4(),
                type: type,
                content: "",
                options: {},
                showOptions: false
            }
            , ...arrayRight])
    }

    const updateBlock = (index, update) => {
        setBlocks(blocks.map((block, i) => {
            if (index === i) return update
            else return block
        }))
        setBlockChangeFunctionTrigger(!blockChangeFunctionTrigger)
    }

    const removeBlock = (index) => {
        setBlocks(blocks.filter((block, i) => {
            return i !== index
        }))
        blockRef.current.splice(index, 1)
    }

    const moveBlockUp = (index) => {
        if (index > 0) {
            let temp = blocks[index - 1]
            let temp2 = blocks[index]
            setBlocks(blocks.map((block, i) => {
                if (i === index) return temp
                if (i === index - 1) return temp2
                else return block
            }))
        }
        setBlockChangeFunctionTrigger(!blockChangeFunctionTrigger)
    }

    const moveBlockDown = (index) => {
        if (index < blocks.length - 1) {
            let temp = blocks[index + 1]
            let temp2 = blocks[index]
            setBlocks(blocks.map((block, i) => {
                if (i === index) return temp
                if (i === index + 1) return temp2
                else return block
            }))
        }
        setBlockChangeFunctionTrigger(!blockChangeFunctionTrigger)
        console.log(blocks[index])
    }

    useEffect(() => {
        const setFromEvent = (e) => {
            if (blockRef.current.length > 0 && !preventOptionChange) {
                blockRef.current.map((ref, i) => {
                    if (i < blocks.length) {
                        let hovered = e.clientY >= ref.offsetTop - scrollY && e.clientY <= ref.offsetTop - scrollY + ref.clientHeight

                        if (blocks[i].showOptions !== hovered) {
                            updateBlock(i, {
                                type: blocks[i].type,
                                content: blocks[i].content,
                                options: blocks[i].options,
                                showOptions: hovered
                            })
                        }
                    }
                })
            }
        }
        window.addEventListener("mousemove", setFromEvent)

        return () => {
            window.removeEventListener("mousemove", setFromEvent)
        }
    })

    useEffect(() => {
        addBlock(0, "md")
    }, []);

    return (
        <div>
            <NavBar
                transparent={false}
                lightText={false}
            />

            <div className="container justify-content-center" style={{marginTop: "7rem"}}>
                <h4>제목</h4>
                <input type="text" id="input-title"
                       className="form-control text-dark px-2 py-1 mt-3"
                       onChange={(e) => {
                           setTitle(e.target.value)
                           console.log(blockRef.current[0].getValue())
                       }}/>
                {
                    blocks.map((block, index) => {
                        switch (block.type) {
                            case "md":
                                return (
                                    <div key={block.uuid} ref={(el) => blockRef.current[index] = el}>
                                        <MarkdownEditorBlock
                                            key={block.uuid}
                                            value={block.content}
                                            onChange={(value) => updateBlock(index,
                                                {
                                                    uuid: block.uuid,
                                                    type: block.type,
                                                    content: value,
                                                    options: block.options
                                                }
                                            )}
                                            showOptions={block.showOptions}
                                            onMoveUp={() => moveBlockUp(index)}
                                            onMoveDown={() => moveBlockDown(index)}
                                            onDelete={() => removeBlock(index)}
                                            isFirstPosition={index === 0}
                                            isLastPosition={index === blocks.length - 1}
                                            onOptionsHoverStateChanged={setPreventOptionChange}
                                        />
                                        <AddButton onAdd={(type) => {addBlock(index, type)}} />
                                    </div>
                                )
                            case "code":
                                return (
                                    <div key={block.uuid} ref={(el) => blockRef.current[index] = el}>
                                        <CodeEditorBlock
                                            key={block.uuid}
                                            value={block.content}
                                            onChange={(value) => updateBlock(index,
                                                {
                                                    uuid: block.uuid,
                                                    type: block.type,
                                                    content: value,
                                                    options: block.options
                                                }
                                            )}
                                            language={block.options.language}
                                            onLanguageChanged={(lang) => {

                                                updateBlock(index, {
                                                    uuid: block.uuid,
                                                    type: block.type,
                                                    content: block.content,
                                                    options: {
                                                        language: lang
                                                    }
                                                })
                                            }}
                                            showOptions={block.showOptions}
                                            onMoveUp={() => moveBlockUp(index)}
                                            onMoveDown={() => moveBlockDown(index)}
                                            onDelete={() => removeBlock(index)}
                                            isFirstPosition={index === 0}
                                            isLastPosition={index === blocks.length - 1}
                                            onOptionsHoverStateChanged={setPreventOptionChange}
                                        />
                                        <AddButton onAdd={(type) => {addBlock(index, type)}} />
                                    </div>
                                )
                            case "img":
                                return (
                                    <div key={block.uuid} ref={(el) => blockRef.current[index] = el}>
                                        <ImageSelectorBlock
                                            key={block.uuid}
                                            value={block.content}
                                            onChange={(e) => updateBlock(index,
                                                {
                                                    uuid: block.uuid,
                                                    type: block.type,
                                                    content: e.target.value,
                                                    options: block.options
                                                }
                                            )}
                                            imageBlob={block.options.imgblob}
                                            onImageChange={(e) => updateBlock(index,
                                                {
                                                    uuid: block.uuid,
                                                    type: block.type,
                                                    content: block.content,
                                                    options: {
                                                        imgblob: e
                                                    }
                                                }
                                            )}
                                            showOptions={block.showOptions}
                                            onMoveUp={() => moveBlockUp(index)}
                                            onMoveDown={() => moveBlockDown(index)}
                                            onDelete={() => removeBlock(index)}
                                            isFirstPosition={index === 0}
                                            isLastPosition={index === blocks.length - 1}
                                            onOptionsHoverStateChanged={setPreventOptionChange}
                                        />
                                        <AddButton onAdd={(type) => {addBlock(index, type)}} />
                                    </div>
                                )
                        }
                    })
                }
                {
                    blocks.length === 0 && <AddButton onAdd={(type) => {addBlock(0, type)}} />
                }
                <div className="mt-3">
                    <TagBlock
                    tags={tags}
                    onTagsChanged={setTags}/>
                </div>

                <Button className="btn-lg btn-primary text-white mt-3"
                onClick={() => {
                    //여기에 업로드 구현
                }}>업로드</Button>

            </div>
        </div>
    )
}