import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { BsFillGearFill } from 'react-icons/bs';
import { useContext } from 'react';

import sideBarConfig from './sideBarConfig';
import NavItem from '../NavItem';
import Button from '../Button';
import ModalContainer from '../Modal';
import { SettingContext } from '../../Context/SettingContext';
import SettingForm from '../Setting';
import Aside from '../Aside';

const cx = classNames.bind(styles);

function SideBar() {
    const context = useContext(SettingContext);
    const [modal, setModal] = context;

    const handleShowModal = (event) => {
        // stopPropagation này hiện tại chưa có tác dụng :))
        event.stopPropagation();
        setModal(!modal);
    };
    return (
        <Aside className={cx('wrapper')}>
            <img
                className={cx('user-avatar')}
                src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/337850241_3364254257175559_498645843823074380_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jkVsVW_r0WEAX_CfVWE&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBEnz0s-YU_4BIejNY4eUhaLIUg2_VsD7ecQfE8jJ2J5Q&oe=648A855E"
                alt=""
            />
            <div className={cx('sideBar-nav')}>
                {sideBarConfig.map((ele, idx) => (
                    <NavItem
                        key={idx}
                        to={ele.to}
                        ActiveIcon={ele.ActiveIcon}
                        DefaultIcon={ele.DefaultIcon}
                        text={ele.text}
                    />
                ))}
            </div>
            <Button onClick={handleShowModal} className={cx('setting')} children={<BsFillGearFill />} />
            {modal && (
                <ModalContainer onClick={handleShowModal}>
                    <SettingForm onClick={handleShowModal} />
                </ModalContainer>
            )}
        </Aside>
    );
}

export default SideBar;
