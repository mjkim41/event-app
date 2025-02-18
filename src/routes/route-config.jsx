import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layout/RootLayout.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import EventLayout from "../layout/EventLayout.jsx";
import EventDetailPage from "../pages/EventsDetailPage.jsx";
import {loader as eventLoader} from "../pages/EventsPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        loader: eventLoader,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/events',
                element: <EventLayout />
            },
            {
                path: ':eventId',
                element: <EventDetailPage/>
            }
        ]
    }
]);


export default router;