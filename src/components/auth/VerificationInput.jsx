import styles from './SignUpForm.module.scss';
import {useRef} from "react";

const VerificationInput = () => {

    const inputsRef = useRef([]);

    // input 태그들을 ref에 바인딩
    const bindInputRef = ($input, index) => {
        console.log(index);
        inputsRef.current[index] = $input;
    }

    // 초기렌더링 시 첫번쨰 input에 포커싱

    return (
        <>
            <p>Step 2: 이메일로 전송된 인증번호 4자리를 입력해주세요.</p>
            <div className={styles.codeInputContainer}>
                {
                    Array.from(new Array(4)).map((_, index) => (
                        <input
                            ref={($input) => bindInputRef($input, index)}
                            key={index}
                            type='text'
                            className={styles.codeInput}
                            maxLength={1}
                            onChange={(e) => console.log(inputsRef.current)}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default VerificationInput;
