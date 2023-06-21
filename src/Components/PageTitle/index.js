import classNames from 'classnames/bind';
import styles from './PageTitle.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function PageTitle({ className, LeftIcon, RightIcon, text }) {
    return (
        <h2 className={cx('wrapper', className)}>
            {LeftIcon && <span className={cx('icon', 'leftIcon')}>{LeftIcon}</span>}
            <span className={cx('text')}>{text}</span>
            {RightIcon && <span className={cx('icon', 'Righticon')}>{RightIcon}</span>}
        </h2>
    );
}

PageTitle.defaultProps = {
    LeftIcon: <></>,
    RightIcon: <></>,
};

PageTitle.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
};

export default PageTitle;
