import EventsNavigation from "./EventsNavigation.jsx";
import {Outlet} from "react-router-dom";

const EventLayout = () => {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    );
};

export default EventLayout;