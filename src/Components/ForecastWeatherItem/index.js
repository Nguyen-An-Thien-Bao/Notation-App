import classNames from 'classnames/bind';
import styles from './ForecastWeatherItem.module.scss';
import { RiCalendarTodoFill } from 'react-icons/ri';

const cx = classNames.bind(styles);

function ForecastWeatherItem({ data }) {
    const weekDay = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const day = new Date(data.date);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('day-container')}>
                <h3 className={cx('day')}>{weekDay[day.getDay()]}</h3>
                <p className={cx('rain-rate')}>
                    <RiCalendarTodoFill className={cx('icon')} />
                    <span>{data.date}</span>
                </p>
                <p className={cx('rain-rate')}>Chance Of Rain: {data.day.daily_chance_of_rain}%</p>
            </div>
            <div className={cx('info')}>
                <span className={cx('info-icon')}>
                    <img src={data.day.condition.icon} alt="" />
                </span>
                <p className={cx('info-text')}>Avarage Temp: {data.day.avgtemp_c}</p>
            </div>
        </div>
    );
}

export default ForecastWeatherItem;
