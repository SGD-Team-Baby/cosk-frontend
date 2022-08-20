import React, { useEffect, useState } from "react";
import axios from "axios";
import {ListGroup} from "react-bootstrap";
import instance from "../../ConstantValue";
export default function BoardList(props) {
    const url = "http://127.0.0.1:8000/post/list/"
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const token = "AAAAAAAAAA";

    useEffect(() => {
        let completed = false;

        async function get(){
            const result = await instance.get("/post/list", { headers: {'Authentication' : `Bearer ${token}`}})

                .then(function (response){
                    // console.log(response.data);
                    return response
                })
                .catch(function (error){
                    console.log("ERROR");
                    setError(true)
                    console.log(error)
                    return error.response;
                    // ERROR
                });

            if(!completed) {
                setLoading(false);
                setData(result.data);
                console.log(data);
            }
        }
        get();

        return () => {completed = true}
    }, []);

    if(!error && !loading) {
        let length = data['data'].length;
        if(props.limitLength < data['data'].length)
            length = props.limitLength;

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