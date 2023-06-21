import classNames from 'classnames/bind';
import styles from './TodoList.module.scss';
import TodoRequest from '../../api/GetNoteService';
import Tippy from '@tippyjs/react';
import React, { useContext, useEffect } from 'react';
import { TodoListContext } from '../../Context/TodoListContext';

const PageItem = React.lazy(() => import('../PageItem'));
const ShowMore = React.lazy(() => import('../ShowMore'));

const cx = classNames.bind(styles);

function TodoList() {
    const [todoList, setTodoList] = useContext(TodoListContext);

    useEffect(() => {
        const fetchTodoList = async () => {
            try {
                const res = await TodoRequest();
                setTodoList(res);
            } catch (error) {
                console.log('Thông Báo Lỗi:', error.message);
            }
        };
        fetchTodoList();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {todoList.map((item, idx) => {
                console.log();
                return (
                    <React.Suspense key={item.id} fallback={<div>loading...</div>}>
                        <PageItem className={cx('wrapper')}>
                            <div className={cx('item-wrapper')}>
                                <div className={cx('item-heading-box')}>
                                    <Tippy
                                        interactive
                                        placement="left"
                                        offset={[45, -195]}
                                        delay={[0, 200]}
                                        content={item.title}
                                        className={cx('tooltip')}
                                        zIndex={[10]}
                                    >
                                        <h3 className={cx('todo-heading')}>{item.title}</h3>
                                    </Tippy>
                                </div>
                                <span className={cx('todo-date')}>{item.date}</span>
                                <textarea readOnly className={cx('todo-content')} value={item.content}></textarea>
                            </div>
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <ShowMore className={cx('more-btn')} index={idx} ItemId={item.id} data={item} />
                            </React.Suspense>
                        </PageItem>
                    </React.Suspense>
                );
            })}
        </>
    );
}

export default TodoList;
