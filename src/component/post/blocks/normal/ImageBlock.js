import React from "react";

export default function ImageBlock({src, description}) {
    return (
        <div className="text-center mb-4">
            <img className="rounded-3 shadow" src={src} style={{maxWidth:"90vh", maxHeight: "50vh"}} />
            <p className="pt-2 small text-secondary">{description}</p>
        </div>
    )
}