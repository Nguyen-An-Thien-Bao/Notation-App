import { useEffect, useId, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ lableText, input, onChange, value }) {
    const id = useId();

    return (
        <div className={cx('wrapper')}>
            <label className={cx('lable')} htmlFor={id}>
                {lableText}:
            </label>
            {input ? (
                <input
                    value={value}
                    onChange={onChange}
                    spellCheck={false}
                    className={cx('inp')}
                    id={id}
                    placeholder={`Type your ${lableText}...`}
                />
            ) : (
                <textarea
                    value={value}
                    onChange={onChange}
                    spellCheck={false}
                    className={cx('inpTextarea')}
                    placeholder={`Type your ${lableText}...`}
                />
            )}
        </div>
    );
}

export default Input;
