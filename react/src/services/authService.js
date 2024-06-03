import axios from "axios";

const base_url = '//localhost:3000'

const signIn = async credentials => {
    const response = await axios.post(`${base_url}/api/auth/sign-in`, credentials);
    return response;
}

const signUp = credentials => {
    return axios.post(`${base_url}/api/auth/sign-up`, credentials);
}

const isTokenExpired = async token => {
    // Note: this function return a http status
    try {
        const response = await axios.post(`${base_url}/api/auth/is-token-expired`, {"token": token});
        return response.status
    }
    catch (e) {
        return e.response.status
    }
}

export default { signIn, signUp, isTokenExpired }