import {useEffect, useState} from "react";
import EventList from "../components/EventList.jsx";
import {useLoaderData} from "react-router-dom";

const EventsPage = () => {

    // router에서 상위 경로에 loader 함수 만들어 놓음
    const eventList = useLoaderData();

    // useEffect 안 쓰는 이유 : useEffect는 렌더링 이후에 실행 됨
    // useEffect(() => {
    //
    //     const fetchEvents = async () => {
    //         const response = await fetch(`http://localhost:9000/api/events`);
    //         const responseData = await response.json();
    //
    //         setEventList(responseData);
    //     };
    //
    //     fetchEvents();
    //
    // }, []);

    return (
       <EventList eventList={eventList} />
    );
};

export default EventsPage;

// loader 아웃소싱
export const loader = async () => {
    return await fetch(`http://localhost:9000/api/events`);
}
