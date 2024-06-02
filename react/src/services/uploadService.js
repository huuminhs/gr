import axios from "axios";

const base_url = '//localhost:3000'

const createPost = (token, post_info) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return axios.post(`${base_url}/api/post`, post_info);
}

export default { createPost }