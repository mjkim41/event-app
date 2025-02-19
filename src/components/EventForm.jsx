import {Form, useNavigate} from 'react-router-dom';
import styles from './EventForm.module.scss';

const EventForm = () => {

    // 링크 이동시 새로고침 없이 이동하는 훅
    const navigate = useNavigate();

    // # action 함수로 대체함 # //
    // // 서버로 데이터 보내기
    // const handleSubmit = e => {
    //     e.preventDefault();
    //
    //     // form에 입력한 값 가져오기
    //     const formData = new FormData(e.target);
    //
    //     // 서버에 보낼 데이터 만들기
    //     const payload = {
    //         title: formData.get('title'),
    //         desc: formData.get('description'),
    //         imageUrl: formData.get('image'),
    //         beginDate: formData.get('date')
    //     };
    //     // console.log(payload);
    //
    //     // 서버로 페칭
    //     const fetchPost = async () => {
    //         const response = await fetch(`http://localhost:9000/api/events`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(payload),
    //         });
    //
    //         if (response.ok) {
    //             // window.location.href = '/events';
    //             navigate('/events');
    //         }
    //     };
    //
    //     fetchPost();
    //
    //
    // };

    return (
        // Action : PUT, DELETE, DELETE 요청 시 사용
        //  - 트리거 방법 :
        //     1. form 태그를 대문자 Form 태그로 변경
        //     2. method 옵션을 설정
        <Form
            method='POST'
            className={styles.form}
            noValidate
            // onSubmit={handleSubmit}
        >
            <p>
                <label htmlFor='title'>Title</label>
                <input
                    id='title'
                    type='text'
                    name='title'
                    required
                />
            </p>
            <p>
                <label htmlFor='image'>Image</label>
                <input
                    id='image'
                    type='url'
                    name='image'
                    required
                />
            </p>
            <p>
                <label htmlFor='date'>Date</label>
                <input
                    id='date'
                    type='date'
                    name='date'
                    required
                />
            </p>
            <p>
                <label htmlFor='description'>Description</label>
                <textarea
                    id='description'
                    name='description'
                    rows='5'
                    required
                />
            </p>
            <div className={styles.actions}>
                 {/*navigate('..') : /events/new -> /events로 이동*/}
                <button type='button' onClick={() => navigate('..')}>Cancel</button>
                <button>Save</button>
            </div>
        </Form>
    );
};

export default EventForm;