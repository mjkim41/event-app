import {redirect, useNavigate} from 'react-router-dom';
import EventForm from '../components/EventForm';
import { EVENT_API_URL } from '../config/host-config';
import {getUserRole, getUserToken} from '../config/auth-config';
import { fetchWithAuth } from '../services/api';
import {useContext, useEffect} from "react";
import EventContext from "../context/event-context.js";

const NewEventPage = () => {

    const navigate = useNavigate();

    const { totalEventCount } = useContext(EventContext);

    // 권한 검사 + 이벤트 검사
    // 로그인을 하면, 백엔드에서 token을 생성해서 전달해주면, 프론트에서 localStorage에 저장해놓음. localstorage에서 role 값을 가져옴
    useEffect(() => {
        const role = getUserRole();
        if (role) {
            // console.log(`당신의 권한은 ${role}입니다`);
            // console.log(`당신이 생성한 이벤트 개수는 ${totalEventCount}개입니다.`);
            if (role === 'COMMON' && totalEventCount >= 4) {
                alert('일반 회원은 이벤트 생성시 4개로 제한됩니다.');
                navigate('/');
            }
        }
    }, [totalEventCount]);
    return <EventForm method='POST' />;
};

export default NewEventPage;

// action함수 생성하고 내보내기
/*
  action함수 트리거방법
  1. form태그를 Form태그로 변경해야 함
*/
export const action = async ({ request, params }) => {

    // console.log('이벤트 생성 요청 보내기!!');

    // action함수에서 form에 입력한 값 가져오기
    const formData = await request.formData();
    // 서버에 보낼 데이터 만들기
    const payload = {
        title: formData.get('title'),
        desc: formData.get('description'),
        imageUrl: formData.get('image'),
        beginDate: formData.get('date'),
    };
    // console.log(payload);


    // 서버 요청 URL을 요청방식에 따라 동적으로 변경
    let requestUrl = EVENT_API_URL;
    if (request.method === 'PUT') {
        requestUrl += `/${params.eventId}`;
    }

    // 서버로 페칭
    const response = await fetchWithAuth(requestUrl, request.method, payload);

    // 다른페이지로 이동하는 방법
    return redirect('/events'); // 목록페이지로 이동
};
