import routesConfig from '../../Configs/routes';
import {
    RiHome2Fill,
    RiHome2Line,
    RiFileList3Fill,
    RiFileList3Line,
    RiMoneyDollarCircleFill,
    RiMoneyDollarCircleLine,
    RiYoutubeFill,
    RiYoutubeLine,
    RiBookmark3Fill,
    RiBookmark3Line,
    RiFolder4Fill,
    RiFolder4Line,
} from 'react-icons/ri';

const sideBarConfig = [
    {
        // text: 'home',
        to: routesConfig.home,
        ActiveIcon: <RiHome2Fill />,
        DefaultIcon: <RiHome2Line />,
    },
    {
        // text: 'to do list',
        to: routesConfig.note,
        ActiveIcon: <RiFileList3Fill />,
        DefaultIcon: <RiFileList3Line />,
    },
    {
        // text: 'financial',
        to: routesConfig.financial,
        ActiveIcon: <RiMoneyDollarCircleFill />,
        DefaultIcon: <RiMoneyDollarCircleLine />,
    },
    {
        // text: 'youtubeMark',
        to: routesConfig.youtubeMarks,
        ActiveIcon: <RiYoutubeFill />,
        DefaultIcon: <RiYoutubeLine />,
    },
    {
        // text: 'bookMarks',
        to: routesConfig.bookMarks,
        ActiveIcon: <RiBookmark3Fill />,
        DefaultIcon: <RiBookmark3Line />,
    },
    {
        // text: 'document',
        to: routesConfig.document,
        ActiveIcon: <RiFolder4Fill />,
        DefaultIcon: <RiFolder4Line />,
    },
];

export default sideBarConfig;
