import {Stack} from "react-bootstrap";
import React from "react";

export default function PostListItem({id, title, authorName, tags, time, visit, favorites, onClick}) {
    return (
        <Stack direction="horizontal" className="py-2 px-3" style={{cursor: "pointer"}} onClick={onClick}>
            <div className="text-start me-auto">
                <Stack direction="horizontal" gap="2">
                    <span className="text-secondary">{id}</span>
                    <span>{title}</span>
                    {tags.map((tag) => {
                        return <span className="text-secondary">#{tag}</span>
                    })}
                </Stack>

            </div>
            <div className="text-end">
                <Stack direction="horizontal" gap="2" style={{fontSize: "95%"}}>
                    <span>{authorName}</span>
                    <span className="text-secondary">{time}</span>
                    <span className="text-secondary text-center"><span className="material-symbols-outlined" style={{fontSize: "110%"}}>visibility</span>{visit}</span>
                    <span className="text-primary text-center"><span className="material-symbols-outlined" style={{fontSize: "110%"}}>thumb_up</span>{favorites}</span>
                </Stack>
            </div>
        </Stack>
    )
}