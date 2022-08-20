export default function TagBlock({tags, onTagsChanged}) {

    return (
        <div className="rounded-3 pt-3 px-3 pb-1" style={{backgroundColor: "#eeeeee"}}>
            <h5>태그</h5>
            <input type={"text"}
                   className="-text-input"
                   style={{width: "100%", background: "transparent", border: "none"}}
                   placeholder="여기에 태그를 입력하세요"
            value={tags}
            onChange={(e) => onTagsChanged(e.target.value)}/>
            <p className="mt-2">태그는 쉼표(,)로 구분하여 어려 개를 입력할 수 있습니다.</p>
        </div>
    )
}