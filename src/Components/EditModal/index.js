import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './EditModal.module.scss';
import { useState, useContext } from 'react';
import { TodoListContext } from '../../Context/TodoListContext';
import { PUT_TodoRequest } from '../../api/CRUDNoteService';

const cx = classNames.bind(styles);

function EditModal({ data, index, func }) {
    const [todoList, setTodoList] = useContext(TodoListContext);
    const [title, setTitle] = useState(data.title);
    const [content, setContent] = useState(data.content);
    function handleSaveEdit() {
        if (title === '' || content === '') {
            return;
        }
        const newTodo = {
            ...todoList[index],
            title: title,
            content: content,
        };
        try {
            todoList[index] = newTodo;
            const PUT = async () => {
                await PUT_TodoRequest(todoList[index].id, newTodo);
            };
            PUT();
            setTodoList([...todoList]);
            func();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={cx('wrapper')}>
            <input
                spellCheck={false}
                className={cx('edit-title')}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title goes here..."
            />
            <textarea
                placeholder="Content goes here..."
                spellCheck={false}
                className={cx('edit-content')}
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <div className={cx('text-editor')}>
                <button style={{ cursor: 'pointer' }} onClick={handleSaveEdit}>
                    save
                </button>
            </div>
        </div>
    );
}

EditModal.propTypes = {
    data: PropTypes.object,
};

export default EditModal;
