import classNames from 'classnames/bind';
import styles from './Setting.module.scss';
import PropTypes from 'prop-types';
import { RiCloseFill } from 'react-icons/ri';
import Button from '../Button';

const cx = classNames.bind(styles);

function SettingForm({ onClick }) {
    return (
        <div className={cx('wrapper')}>
            <Button className={cx('close-btn')} onClick={onClick}>
                <RiCloseFill />
            </Button>
        </div>
    );
}

SettingForm.defaultProps = {
    onClick: () => {},
};

SettingForm.propTypes = {
    onClick: PropTypes.func,
};

export default SettingForm;
