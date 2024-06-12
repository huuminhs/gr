import axios from "axios";

const base_url = '//localhost:3000'

const createPost = (token, post_info) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return axios.post(`${base_url}/api/post`, post_info);
}

const getAllPost = () => {
    return axios.get(`${base_url}/api/post`)
}

const searchPost = (str) => {
    return axios.post(`${base_url}/api/post/search`, {"str": str})
}

export default { createPost, getAllPost, searchPost }