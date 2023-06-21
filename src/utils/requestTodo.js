import axios from 'axios';

const requestTodo = axios.create({
    baseURL: 'http://localhost:4000/',
});

const get = async (path = null, config = {}) => {
    const res = await requestTodo(path, config);
    return res;
};

const post = async (path, data) => {
    const res = await requestTodo(path, data);
    return res;
};

export default requestTodo;
export { get, post };
