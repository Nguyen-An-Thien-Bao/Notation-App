import { NavLink } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import styles from './NavItem.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function NavItem({ to, text, ActiveIcon, DefaultIcon, ...props }) {
    return (
        <Tippy visible={false} placement={'right-end'} className={cx('tool')} content={text}>
            <NavLink className={({ isActive }) => cx('NavItem', { active: isActive })} to={to} {...props}>
                <span className={cx('NavItemActive-icon', 'icon')}>{ActiveIcon}</span>
                <span className={cx('NavItemDefault-icon', 'icon')}>{DefaultIcon}</span>
                <span className={cx('NavItem-text')}>{text}</span>
            </NavLink>
        </Tippy>
    );
}

NavItem.defaultProps = {
    ActiveIcon: () => {},
    DefaultIcon: () => {},
};

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string,
    ActiveIcon: PropTypes.node,
};

export default NavItem;
