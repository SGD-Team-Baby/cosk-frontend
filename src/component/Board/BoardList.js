import React, { useEffect, useState } from "react";
import axios from "axios";
import {ListGroup} from "react-bootstrap";
import instance from "../../ConstantValue";
export default function BoardList(props) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let completed = false;

        async function get(){
            const result = await instance.get("/post/list", {})

                .then(function (response){
                    return response
                })
                .catch(function (error){
                    setError(true)
                    return error.response;
                    // ERROR
                });

            if(!completed) {
                setLoading(false);
                setData(result.data);
            }
        }
        get();

        return () => {completed = true}
    }, []);

    if(!error && !loading) {
        let length = props.limitLength || data['data'].length;

        return (
            <ListGroup className="rounded-3 shadow-lg mt-4">
                {
                    data['data'].slice(0, length).map((item) => (

                        <ListGroup.Item action href={`/post/${item.id}`} key={item.id} className="ps-4">
                            <h4 className="mt-3">{item.title}</h4>
                            <p>{item.body}</p>
                            <p className="text-primary" style={{fontSize: "0.8rem"}}>
                                {decorateTags(item.tags)}
                            </p>
                        </ListGroup.Item>
                    ))}
            </ListGroup>
        );

    }

    return decorateString("불러오는 중 입니다.");
};


function decorateTags(arr){
    if (arr.length === 0){
        return [String.fromCharCode(1600)]
    }
    return arr.map((tag) => (
        '#' + tag + ' '
    ));
}

function decorateString(string){
    return (<ListGroup className="rounded-3 shadow-lg mt-4">
            <ListGroup.Item key={-1} className="ps-4">
                <h4 className="mt-3"> </h4>
                <p>{string}</p>
                <p className="text-primary" style={{fontSize: "0.8rem"}}> </p>
            </ListGroup.Item>
        </ListGroup>
    )
}