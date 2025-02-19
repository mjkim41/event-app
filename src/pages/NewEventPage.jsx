import EventForm from "../components/EventForm";
import {redirect} from "react-router-dom";

const NewEventPage = () => {
    return <EventForm method='POST'/>;
};

export default NewEventPage;


// Action : PUT, DELETE, DELETE 요청 시 사용
//  - 트리거 방법 :
//     1. form 태그를 대문자 Form 태그로 변경
//     2. method 옵션을 설정
//     3. parameter로 props.request 받고,
//     4. "await" request.formData();로 form data의 데이터 가져오기
//     5. redirect() 로 페이지 이동
export const action = async ({request, params}) => {

    console.log(request);

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

    // 서버 요청 url을 요청 방식에 따라 동적으로 변경
    let requestUrl = `http://localhost:9000/api/events`;
    if (request.method === 'PUT') {
        requestUrl += `/${params.eventId}`;
    }

    // 서버로 페칭
    const response = await fetch(requestUrl, {
        method: request.method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    // 다른페이지로 이동하는 방법
    return redirect('/events'); // 목록페이지로 이동
}

