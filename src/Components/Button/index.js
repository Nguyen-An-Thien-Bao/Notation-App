import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import style from './Button.module.scss';

const cx = classNames.bind(style);

function Button({ to, LeftIcon, RightIcon, href, children, className, onClick, ...props }) {
    let Comp = 'button';
    if (to) {
        Comp = Link;
    } else if (href) {
        Comp = 'a';
    }
    return (
        <Comp onClick={onClick} className={cx('wrapper', className)} to={to} href={href} {...props}>
            {LeftIcon && <span className={cx('icon', 'leftIcon')}>{LeftIcon}</span>}
            {children}
            {RightIcon && <span className={cx('icon', 'rightIcon')}>{RightIcon}</span>}
        </Comp>
    );
}

Button.defaultProps = {
    onClick: () => {},
};

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    classNames: PropTypes.string,
};

export default Button;
