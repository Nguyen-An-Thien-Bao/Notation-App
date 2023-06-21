import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_WEATHER_API,
    headers: {
        'X-RapidAPI-Key': '6ad24742f5msh09e97ff3dc834e4p191ff7jsn9e905a5f084c',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
});

const get = async (path, config = {}) => {
    const res = await request(path, config);
    return res;
};

export default request;
export { get };
