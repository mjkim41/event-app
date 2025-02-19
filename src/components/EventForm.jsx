import {Form, useNavigate} from 'react-router-dom';
import styles from './EventForm.module.scss';

const EventForm = ({ method }) => {

    // 링크 이동시 새로고침 없이 이동하는 훅
    const navigate = useNavigate();

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
                <button>{method === 'POST' ? 'Save' : 'Modify'}</button>
            </div>
        </Form>
    );
};

export default EventForm;