import {Form, useNavigate} from 'react-router-dom';
import styles from './EventForm.module.scss'

const EventForm = ({ method, event={} }) => {

    // 링크 이동시 새로고침 없이 이동하는 훅
    const navigate = useNavigate();

    const { title, desc, 'img-url' : image, 'start-date': date} = event;

    // 날짜를 0000-00-00 형식으로
    const formatDate = (date) => {

        if (!date) return;

        const [yearPart, monthDayPart] = date.split('년 ');
        const [monthPart, dayPart] = monthDayPart.split('월 ');

        return `${yearPart}-${monthPart}-${dayPart.replace('일', '')}`;

    };

    return (
        // Action : PUT, DELETE, DELETE 요청 시 사용
        //  - 트리거 방법 :
        //     1. form 태그를 대문자 Form 태그로 변경
        //     2. method 옵션을 설정
        <Form
            method={method}
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
                    defaultValue={event ? title : ''}
                />
            </p>
            <p>
                <label htmlFor='image'>Image</label>
                <input
                    id='image'
                    type='url'
                    name='image'
                    required
                    defaultValue={event ? image : ''}
                />
            </p>
            <p>
                <label htmlFor='date'>Date</label>
                <input
                    id='date'
                    type='date'
                    name='date'
                    required
                    defaultValue={event ? formatDate(date) : ''}
                />
            </p>
            <p>
                <label htmlFor='description'>Description</label>
                <textarea
                    id='description'
                    name='description'
                    rows='5'
                    required
                    defaultValue={event ? desc : ''}
                />
            </p>
            <div className={styles.actions}>
                 {/*navigate('..') : /events/new -> /events로 이동*/}
                <button type='button' onClick={() => navigate('..')}>Cancel</button>
                <button>{method === 'POST' ? 'Save' : 'Modify'}</button>
            </div>
        </Form>
    );
};

export default EventForm;