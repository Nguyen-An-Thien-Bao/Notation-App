import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function ModalContainer({ children, onClick, className }) {
    // chưa fix đc quả stopPropagation nên xài cách này :))
    return (
        <>
            <div onClick={onClick} className={cx('wrapper', 'overlay', className)}></div>
            {children}
        </>
    );
}

ModalContainer.defaultProps = {
    onClick: () => {},
};

ModalContainer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export default ModalContainer;
