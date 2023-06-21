import requestTodo from '../utils/requestTodo';

const TodoRequest = async () => {
    const res = await requestTodo('todoStorage');
    return res.data;
};

export default TodoRequest;
