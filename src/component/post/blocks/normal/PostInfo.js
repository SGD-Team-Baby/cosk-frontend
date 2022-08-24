import React from "react";


export default function PostInfo({title, name, time, favorites, visit, onFavoritesClick}) {
    return (
        <div>
            <link rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,0,0"/>

            <div className="row align-items-baseline">
                <div className="col-auto">
                    <h3 className="fw-bold">{title}</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-auto text-secondary">
                    <span className="material-symbols-outlined align-text-top" style={{fontSize: "110%"}}>person</span> {name}
                </div>
                <div className="col-auto text-secondary">
                    <span className="material-symbols-outlined align-text-top" style={{fontSize: "110%"}}>event</span> {time}
                </div>

                <div className="col-auto text-secondary">
                    조회수 {visit}회
                </div>
                <div className="col-auto text-primary" style={{cursor: "pointer"}} onClick={onFavoritesClick}>

                    <p><span className="material-symbols-outlined align-text-top" style={{fontSize: "110%"}}>thumb_up</span> <span>{favorites}</span></p>
                </div>
            </div>
        </div>
    )
}