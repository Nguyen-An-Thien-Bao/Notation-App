import classNames from 'classnames/bind';
import styles from './ShowMore.module.scss';
import PropTypes from 'prop-types';
import { RiMore2Fill, RiMailOpenLine, RiEdit2Line, RiDeleteBin6Line } from 'react-icons/ri';
import { memo, useEffect, useRef, useState, useContext } from 'react';
import { TodoListContext } from '../../Context/TodoListContext';
import { DELETE_TodoRequest } from '../../api/CRUDNoteService';
import React from 'react';
import Button from '../Button';
import ModalContainer from '../Modal';

const EditModal = React.lazy(() => import('../EditModal'));
const DocModal = React.lazy(() => import('../DocModal'));

const cx = classNames.bind(styles);

function ShowMore({ className, index, ItemId, data }) {
    const [showMore, setShowMore] = useState(false);
    const ModalRef = useRef(null);
    const [docStatus, setDocStatus] = useState(false);
    const [editStatus, setEditStatus] = useState(false);
    const [todoList, setTodoList] = useContext(TodoListContext);

    const ButtonList = [
        {
            title: 'open',
            icon: <RiMailOpenLine />,
            btnFunction: handleOpenDoc,
        },
        {
            title: 'edit',
            icon: <RiEdit2Line />,
            btnFunction: handleOpenEditModal,
        },
        {
            title: 'delete',
            icon: <RiDeleteBin6Line />,
            btnFunction: handleDeleteTodo,
        },
    ];

    useEffect(() => {
        // document.addEventListener('click', ClickOutside, true);
    }, []);

    function handleShowMore(e) {
        setShowMore(!showMore);

        // cái dưới là để check ClickOutside to close the Modal, but I'm kinda lazy at the moment, so i will do it later
        if (ModalRef.current !== e.target) {
            setShowMore(!showMore);
        }
    }

    function handleOpenDoc() {
        setDocStatus(!docStatus);
    }

    function handleOpenEditModal() {
        setEditStatus(!editStatus);
    }

    function handleDeleteTodo() {
        try {
            const DELETE_REQUEST_API = async (id) => {
                todoList.splice(index, 1);
                const newTodoList = [...todoList];
                await DELETE_TodoRequest(id);
                setTodoList(newTodoList);
            };
            DELETE_REQUEST_API(ItemId);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <span className={cx(className, 'more-btn')} onClick={handleShowMore}>
                <RiMore2Fill />
            </span>
            {showMore && (
                <template onClick={handleShowMore} className={cx('modal')} ref={ModalRef}>
                    <div className={cx('button-list')}>
                        {ButtonList.map((button, idx) => {
                            return (
                                <Button
                                    onClick={button.btnFunction}
                                    key={idx}
                                    children={button.title}
                                    RightIcon={button.icon}
                                />
                            );
                        })}
                    </div>
                </template>
            )}
            {editStatus && (
                <ModalContainer onClick={handleOpenEditModal}>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <EditModal data={data} index={index} func={handleOpenEditModal} />
                    </React.Suspense>
                </ModalContainer>
            )}

            {docStatus && (
                <ModalContainer onClick={handleOpenDoc}>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <DocModal data={data} func={handleOpenDoc} />
                    </React.Suspense>
                </ModalContainer>
            )}
        </>
    );
}

ShowMore.defaulfProps = {};

ShowMore.propTypes = {
    data: PropTypes.object,
    className: PropTypes.string,
};

export default memo(ShowMore);
