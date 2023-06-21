import requestTodo from '../utils/requestTodo';

const POST_TodoRequest = async (data) => {
    const res = await requestTodo.post('todoStorage', data);
    return res.data;
};

const DELETE_TodoRequest = async (id) => {
    const res = await requestTodo.delete(`todoStorage/${id}`);
    return res.data;
};

const PUT_TodoRequest = async (id, data) => {
    const res = await requestTodo.put(`todoStorage/${id}`, data);
    return res.data;
};

export { POST_TodoRequest, DELETE_TodoRequest, PUT_TodoRequest };
