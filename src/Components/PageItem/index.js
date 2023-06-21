import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './PageItem.module.scss';
import { forwardRef, memo, useCallback, useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function PageItem({ children, className }) {
    const ItemRef = useRef(null);

    const showItem = useCallback((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio === 1) {
                entry.target.classList.add('opacity');
            } else {
                entry.target.classList.remove('opacity');
            }
        });
    }, []);

    useEffect(() => {
        const Observer = new IntersectionObserver(showItem, { threshold: 1 });
        Observer.observe(ItemRef.current);
    });

    return (
        <div ref={ItemRef} className={cx('wrapper', className)}>
            {children}
        </div>
    );
}

// PageItem.defaultProps = {
//     children: null,
// };

// PageItem.propTypes = {
//     children: PropTypes.node,
//     classNames: PropTypes.string,
//     onClick: PropTypes.func,
// };

export default memo(PageItem);
