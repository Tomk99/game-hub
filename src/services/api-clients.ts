import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4dfcf9052cea4fe99a733e0cef69b82e'
    }
})