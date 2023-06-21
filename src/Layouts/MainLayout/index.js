import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import Aside from '../../Components/SideBar';
import SettingProvider from '../../Context/SettingContext';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <SettingProvider>
                    <Aside />
                </SettingProvider>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default MainLayout;
