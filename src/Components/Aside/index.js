import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Aside.module.scss';

const cx = classNames.bind(styles);

function Aside({ children, className }) {
    return <aside className={cx('wrapper', className)}>{children}</aside>;
}

Aside.defaultProps = {
    classNames: '',
};

Aside.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Aside;
