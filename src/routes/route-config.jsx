import {createBrowserRouter} from "react-router-dom";
import RootLayout from "../layout/RootLayout.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import EventLayout from "../layout/EventLayout.jsx";
import EventDetailPage from "../pages/EventsDetailPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        loader: async () => {
            // console.log('event loader call');
            const response = await fetch(`http://localhost:9000/api/events`);
            return await response.json();
        },
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