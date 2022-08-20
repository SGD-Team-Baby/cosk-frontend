export default function EditorOptions({isFirstPosition, isLastPosition, onMoveUp, onMoveDown, onDelete}) {

    return (

        <div className="rounded-3 border mx-2" style={{float: "left"}}>

            <span style={{cursor: "pointer"}}
                  className={`material-symbols-outlined p-2 ${isFirstPosition ? "text-secondary" : ""}`}
                  onClick={() => !isFirstPosition && onMoveUp()}>arrow_upward</span>
            <span style={{cursor: "pointer"}}
                  className={`material-symbols-outlined p-2 ${isLastPosition ? "text-secondary" : ""}`}
                  onClick={() => !isLastPosition && onMoveDown()}>arrow_downward</span>
            <span style={{cursor: "pointer"}} className="material-symbols-outlined p-2 text-danger"
                  onClick={() => onDelete()}>delete</span>
        </div>
    )
}