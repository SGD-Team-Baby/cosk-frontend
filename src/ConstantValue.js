import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.cosk.kr/'
});

export const URLVALUE = {
    postList:"post/list",
    registration:'account/registration'

}

export const validEmailRegex = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);

export const questionPointColor = "#F900BF"
export const answerPointColor = "#9900F0"

export default instance;
