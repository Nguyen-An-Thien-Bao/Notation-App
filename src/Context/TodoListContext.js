import { createContext, useState } from 'react';

const TodoListContext = createContext();

function TodoListProvider({ children }) {
    const [todoList, setTodoList] = useState([]);

    return <TodoListContext.Provider value={[todoList, setTodoList]}>{children}</TodoListContext.Provider>;
}

export { TodoListContext };
export default TodoListProvider;
