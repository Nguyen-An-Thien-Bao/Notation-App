import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './DocModal.module.scss';

const cx = classNames.bind(styles);

function DocModal({ data, func }) {
    function handleClose() {
        func();
    }

    return (
        <div className={cx('wrapper')}>
            <input readOnly spellCheck={false} className={cx('edit-title')} value={data.title} />
            <textarea
                readOnly
                placeholder="Content goes here..."
                spellCheck={false}
                className={cx('edit-content')}
                value={data.content}
            ></textarea>
            <div className={cx('text-editor')}>
                <button style={{ cursor: 'pointer' }} onClick={handleClose}>
                    close
                </button>
            </div>
        </div>
    );
}

DocModal.propTypes = {
    data: PropTypes.object,
};

export default DocModal;
