import {createBrowserRouter, redirect} from 'react-router-dom';
// import ErrorPage from '../pages/ErrorPage';
import EventsPage, { loader as eventsLoader } from '../pages/EventsPage';
import RootLayout from '../layout/RootLayout';
import EventDetailPage, { loader as eventDetailLoader, deleteAction } from '../pages/EventDetailPage';
import EventLayout from '../layout/EventLayout';
import NewEventPage, {action as manipulateAction} from '../pages/NewEventPage';
import EditPage from '../pages/EditPage';
import HomeLayout from '../layout/HomeLayout';
import WelcomePage from '../pages/WelcomePage';
import SignUpPage from '../pages/SignUpPage';
import {loginAction} from "../components/auth/LoginForm.jsx";
import {authCheckLoader, logoutAction, userDataLoader} from "../config/auth-config.js";
import EventProvider from "../context/EventProvider.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        // errorElement: <ErrorPage />,
        loader: userDataLoader,
        id: 'user-data',
        children: [
            {
                path: '/',
                element: <HomeLayout />,
                children: [
                    {
                        index: true,
                        element: <WelcomePage />,
                        action: loginAction,
                    }, // 웰컴페이지 (로그인 화면 or 로그인 완료시 보여줄 화면)
                    {
                        path: '/sign-up',
                        element: <SignUpPage />
                    },
                    {
                        path: '/logout',
                        action: logoutAction
                    }
                ]
            },
            {
                path: '/events',
                element: (
                    <EventProvider>
                        <EventLayout />
                    </EventProvider>
                ),
                loader: authCheckLoader, // 로그인 권한 검사 로더
                children: [
                    {
                        index: true,
                        element: <EventsPage />,
                        // loader함수는 이 페이지가 라우팅될 때 자동으로 트리거되는 함수
                        // loader: eventsLoader,
                    },
                    {
                        path: 'new',
                        element: <NewEventPage />,
                        action: manipulateAction,
                    },
                    {
                        path: ':eventId',
                        element: <EventDetailPage />,
                        loader: eventDetailLoader,
                        action: deleteAction
                    },
                    {
                        path: ':eventId/edit',
                        element: <EditPage />,
                        loader: eventDetailLoader,
                        action: manipulateAction,
                    },
                ],
            },
        ],
    },
]);

export default router;
