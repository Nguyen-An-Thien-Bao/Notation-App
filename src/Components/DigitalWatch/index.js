import classNames from 'classnames/bind';
import styles from './DigitalWatch.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function DigitalWatch() {
    const region = 'vi';
    const TIME = new Date().toLocaleTimeString();
    const DATE = new Date().toLocaleDateString(region);
    const [time, setTime] = useState(TIME);
    const [date, setDate] = useState(DATE);

    useEffect(() => {
        setTimeout(() => {
            const DATE = new Date().toLocaleDateString(region);
            const TIME = new Date().toLocaleTimeString();
            setTime(TIME);
            setDate(DATE);
        }, 1000);
    }, [TIME, DATE]);

    return (
        <>
            <h1 className={cx('day')}>{date}</h1>
            <h3 className={cx('time')}>{time}</h3>
        </>
    );
}

export default DigitalWatch;
