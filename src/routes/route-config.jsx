import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import EventsPage, { loader as eventsLoader } from '../pages/EventsPage';
import RootLayout from '../layout/RootLayout';
import EventDetailPage, { loader as eventDetailLoader } from '../pages/EventDetailPage';
import EventLayout from '../layout/EventLayout';
import NewEventPage, {action as saveAction} from '../pages/NewEventPage';
import EditPage from "../pages/EditPage.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/events',
                element: <EventLayout />,
                children: [
                    {
                        index: true,
                        element: <EventsPage />,
                        // loader함수는 이 페이지가 라우팅될 때 자동으로 트리거되는 함수
                        loader: eventsLoader,
                    },
                    {
                        path: 'new',
                        element: <NewEventPage />,
                        action: saveAction // 비동기 put, delete, post
                    },
                    {
                        path: ':eventId',
                        element: <EventDetailPage />,
                        loader: eventDetailLoader,
                    },
                    {
                        path: ':eventId/edit',
                        element: <EditPage />
                    }
                ],
            },
        ],
    },
]);

export default router;