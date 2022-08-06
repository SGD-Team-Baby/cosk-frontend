import React, { useEffect, useState } from "react";
import axios from "axios";
import {ListGroup} from "react-bootstrap";
import instance from "../../ConstantValue";
export default function BoardList() {
    const url = "http://127.0.0.1:8000/post/list/"
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true)
    const token = "AAAAAAAAAA";

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios('http://127.0.0.1:8000/post/list/', {headers:{'Authentication' : `Bearer ${token}`}});
    //
    //         setData(result.data);
    //         console.log(typeof result.data);
    //         console.log(result.data);
    //     };
    //
    //     fetchData();
    // }, []);


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

    if(loading){
        return (<ListGroup className="rounded-3 shadow-lg mt-4">
                <ListGroup.Item key={-1} className="ps-4">
                    <h4 className="mt-3"> </h4>
                    <p>불러오는 중입니다.</p>
                    <p className="text-primary" style={{fontSize: "0.8rem"}}> </p>
                </ListGroup.Item>
            </ListGroup>
        )
    }
    else if(!error && !loading) {
        let length = data['data'].length;
        if(length >= 5) {
            return (
                <ListGroup className="rounded-3 shadow-lg mt-4">
                    {
                        data['data'].slice(0, 5).map((item) => (
                            <ListGroup.Item key={item.id} className="ps-4">
                                <h4 className="mt-3">{item.title}</h4>
                                <p>{item.body}</p>
                                <p className="text-primary" style={{fontSize: "0.8rem"}}>#React</p>
                            </ListGroup.Item>
                        ))}
                </ListGroup>
            );
        }
        else{
            return(
            <ListGroup className="rounded-3 shadow-lg mt-4">
                {
                    data['data'].map((item) => (
                        <ListGroup.Item key={item.id} className="ps-4">
                            <h4 className="mt-3">{item.title}</h4>
                            <p>{item.body}</p>
                            <p className="text-primary" style={{fontSize: "0.8rem"}}>#React</p>
                        </ListGroup.Item>
                    ))}
            </ListGroup>
            );
        }
    }
    else {
        return (<ListGroup className="rounded-3 shadow-lg mt-4">
                <ListGroup.Item key={-1} className="ps-4">
                    <h4 className="mt-3"> </h4>
                    <p>게시물이 없습니다.</p>
                    <p className="text-primary" style={{fontSize: "0.8rem"}}> </p>
                </ListGroup.Item>
            </ListGroup>
        )
    }
};
