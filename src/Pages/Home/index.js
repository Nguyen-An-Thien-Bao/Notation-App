import classNames from 'classnames/bind';
import { RiHome2Line } from 'react-icons/ri';
import React from 'react';

import styles from './Home.module.scss';
import PageItem from '../../Components/PageItem';
import DigitalWatch from '../../Components/DigitalWatch';
import PageTitle from '../../Components/PageTitle';

const Weather = React.lazy(() => import('../../Components/Weather'));

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <PageTitle LeftIcon={<RiHome2Line />} text={'home'} className={cx('page-title')} />
            <PageItem className={cx('date-container', 'grid-item')}>
                <DigitalWatch />
            </PageItem>
            <PageItem className={cx('weather-container', 'grid-item')}>
                <React.Suspense fallback={<p>loading...</p>}>
                    <Weather />
                </React.Suspense>
            </PageItem>
            <PageItem className={cx('task-container', 'grid-item')}></PageItem>
            <PageItem className={cx('bookmark-container', 'grid-item')}>bookmark</PageItem>
        </div>
    );
}

export default Home;
