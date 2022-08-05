import React from "react";

export default function ImageBlock({src, description}) {
    return (
        <div className="text-center">
            <img className="rounded-3 shadow" src={src} style={{maxHeight: "50vh"}} />
            <p className="pt-2 small text-secondary">{description}</p>
        </div>
    )
}