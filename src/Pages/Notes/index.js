import classNames from 'classnames/bind';
import { RiTodoLine } from 'react-icons/ri';

import styles from './Todo.module.scss';
import PageItem from '../../Components/PageItem';
import PageTitle from '../../Components/PageTitle';
import TodoListProvider from '../../Context/TodoListContext';
import InputSection from '../../Components/InputSection';

import React from 'react';
const cx = classNames.bind(styles);

const TodoList = React.lazy(() => import('../../Components/NoteList'));

function Todos() {
    return (
        <TodoListProvider>
            <div className={cx('wrapper')}>
                <div className={cx('todo-wrapper')}>
                    <PageTitle LeftIcon={<RiTodoLine />} text="notes" className={cx('page-title')} />
                    <PageItem className={cx('todo-container')}>
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <TodoList />
                        </React.Suspense>
                    </PageItem>
                </div>
                <InputSection />
            </div>
        </TodoListProvider>
    );
}

export default Todos;
