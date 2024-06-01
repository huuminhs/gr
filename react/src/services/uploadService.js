import axios from "axios";

const base_url = '//localhost:3000'

const createPost = async (post_info) => {
    const response = await axios.post(`${base_url}/api/new-post`, post_info);
    return response;
}

export default { createPost }