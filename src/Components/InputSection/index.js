import React, { useState, useContext } from 'react';
import classNames from 'classnames/bind';
import { RiAddCircleLine } from 'react-icons/ri';

import Input from '../../Components/Input';
import styles from './InputSection.module.scss';
import Button from '../../Components/Button';
import Aside from '../../Components/Aside';
import { TodoListContext } from '../../Context/TodoListContext';
import { POST_TodoRequest } from '../../api/CRUDNoteService';

const cx = classNames.bind(styles);

function InputSection() {
    const [todoList, setTodoList] = useContext(TodoListContext);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleOnchangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleOnchangeContent = (e) => {
        setContent(e.target.value);
    };

    function handleAdd() {
        if (title.trim() === '' || content.trim() === '') {
            setTitle('');
            setContent('');
            return alert('pls type something');
        }
        let id = todoList.length !== 0 ? todoList[todoList.length - 1].id + 1 : 0;
        const date = new Date().toLocaleDateString('vi');
        const newTodo = {
            title,
            content,
            date,
            id,
        };
        try {
            const postTodo = async (data) => {
                const res = await POST_TodoRequest(data);
                setTodoList((prev) => [...prev, res]);
                setTitle('');
                setContent('');
            };
            postTodo(newTodo);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Aside className={cx('wrapper')}>
            <Button onClick={handleAdd} children={'add'} LeftIcon={<RiAddCircleLine />} className={cx('add-btn')} />
            <div className={cx('input-section')}>
                <Input value={title} onChange={handleOnchangeTitle} input lableText={'title'} />
                <Input value={content} onChange={handleOnchangeContent} lableText={'content'} />
            </div>
        </Aside>
    );
}

export default InputSection;
