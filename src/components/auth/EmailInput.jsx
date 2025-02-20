import {useEffect, useRef, useState} from "react";
import {AUTH_API_URL} from "../../config/host-config.js";
import styles from './SignupForm.module.scss';
import { debounce } from 'lodash';

const EmailInput = ({onSuccess}) => {

    const emailRef = useRef();

    // 에러 메시지 상태 관리
    const [error, setError] = useState(null);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    // 이메일 입력 이벤트
    const handleEmail = (e) => {
       const inputValue = e.target.value;

        const validateEmailPattern = (email) => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 간단한 이메일 패턴 검사
            return emailPattern.test(email);
        };

        // 이메일 패턴 검증
        if (!validateEmailPattern(inputValue)) {
            // 에러 메시지 세팅
            setError('이메일 형식이 유효하지 않습니다');
            return;
        }

        // 중복 체크
        (async () => {
            const response = await fetch(`${AUTH_API_URL}/check-email?email=${inputValue}`);
            const { isDuplicate, message } = await response.json();
            if (isDuplicate) {
                setError(message);
            } else {
                onSuccess(); // 상위 컴포넌트에 step2로 넘어가도 된다고 알려주기
            }
        })();

        setError(null);

    }

    return (
        <>
            <p>Step 1: 유효한 이메일을 입력해주세요.</p>
            <input
                ref={emailRef}
                type="email"
                placeholder="Enter your email"
                onChange={debounce(handleEmail, 1000)}
                className={error? styles.invalidInput : ''}
            />
            {error && <p className={styles.errorMessage}> {error}</p>}
        </>
    );
};

export default EmailInput;
