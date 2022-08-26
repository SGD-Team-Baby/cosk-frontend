import instance from "../ConstantValue";
import {getToken} from "./TokenService";

export default function ({id, reportType, reportContent}) {
    const url = "/post/report"
    const token = getToken();
    console.log({id, reportType, reportContent})
    instance.post(url, {post:id, type:reportType, message:reportContent}, {headers:{'Authorization': "Bearer " + token}})
        .then(function (response) {
            console.log(response.data)
            console.log({reportType, reportContent})
        })
        .catch(function (error) {
            console.log(error.response)
        })
    
}