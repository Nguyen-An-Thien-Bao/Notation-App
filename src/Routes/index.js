import routesConfig from '../Configs/routes';
import React from 'react';
// import { HomePage, BookMarksPage, FinancialPage, TodosPage, YoutubeMarksPage, DocumentPage } from '../Pages';

const HomePage = React.lazy(() => import('../Pages/Home'));
const BookMarksPage = React.lazy(() => import('../Pages/BookMarks'));
const FinancialPage = React.lazy(() => import('../Pages/Financial'));
const TodosPage = React.lazy(() => import('../Pages/Notes'));
const YoutubeMarksPage = React.lazy(() => import('../Pages/YoutubeMarks'));
const DocumentPage = React.lazy(() => import('../Pages/Document'));

const publicRoute = [
    {
        path: routesConfig.home,
        component: HomePage,
    },
    {
        path: routesConfig.note,
        component: TodosPage,
    },
    {
        path: routesConfig.financial,
        component: FinancialPage,
    },
    {
        path: routesConfig.bookMarks,
        component: BookMarksPage,
    },
    {
        path: routesConfig.youtubeMarks,
        component: YoutubeMarksPage,
    },
    {
        path: routesConfig.document,
        component: DocumentPage,
    },
];

export { publicRoute };
