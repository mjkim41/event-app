import { useEffect, useState } from "react";
import EventList from "../components/EventList";
import { useLoaderData } from "react-router-dom";

const EventsPage = () => {

    // loader가 리턴한 데이터 받아오기
    // const eventList = useLoaderData();

    // 서버에서 가져온 화면에 렌더링할 이벤트 목록
    const [eventList, setEventList] = useState([]);

    // 현재 페이지 번호
    const [currentPage, setCurrentPage] = useState(1);

    // 더 가져올 데이터가 있는지 여부
    const [isFinish, setIsFinish] = useState(false);

    // 서버에서 데이터를 불러오는 함수
    const fetchEvents = async () => {

        if (isFinish) return;

        const response = await fetch(`http://localhost:9000/api/events?sort=id&page=${currentPage}`);
        const { hasNext, eventList: events } = await response.json();

        setEventList((prev) => [...prev, ...events]);
        setIsFinish(!hasNext);
        // 페이지 번호 갱신
        setCurrentPage(prev => prev + 1);
    };

    // useEffect는 렌더링 이후에 실행됨
    useEffect(() => {

      fetchEvents();

    }, [currentPage]);

    console.log('event page render!!');

    return <EventList eventList={eventList} />;
};

export default EventsPage;

// loader를 아웃소싱
// export const loader = async () => fetch(`http://localhost:9000/api/events`);

export const loader = async () => {
    const res = await fetch(`http://localhost:9000/api/events?sort=id`);
    // const jsonData = await res.json();

    // 예외처리
    if (!res.ok) {
        const jsonData = await res.json();
        throw new Response(
            JSON.stringify(jsonData) // 에러메시지
            , {
                status: res.status
            } // 에러 정보 객체
        );
    }

    // loader가 리턴한 데이터는 라우팅된 페이지와
    // 그 컴포넌트의 하위 컴포넌트에서 언제든 뽑아서 사용할 수 있음
    return res; // loader는 fetch결과를 바로 리턴하는 경우 json추출작업을 자동수행
};