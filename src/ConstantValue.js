import axios from "axios";

const instance = axios.create({
    baseURL: 'http://132.226.225.49/',
    timeout: 1000
});

export const URLVALUE = {
    postList:"post/list"
}


export default instance;
