import styles from './SignUpForm.module.scss';
import EmailInput from './EmailInput';
import VerificationInput from './VerificationInput';
import { useState } from 'react';
import ProgressBar from '../common/ProgressBar';
import PasswordInput from "./PasswordInput.jsx";

const SignUpForm = () => {

    // # 입력한 이메일 상태관리
    const [enteredEmail, setEnteredEmail] = useState('');

    // # 현재 어떤 스텝에 위치하고 있는지
    const [step, setStep] = useState(1);
    // # 다음 스텝으로 넘어가는 여부
    const [success, setSuccess] = useState(false);

    // # 다음 스텝으로 넘어가는 함수
    const nextStep = () => {
        setSuccess(true); // only 로딩바용

        setTimeout(() => {
            setStep(prev => prev + 1); // 다음 단계로 이동
            setSuccess(false);
        }, 1200); // 1.2로(로딩바 시간) 뒤에 다음 단계로 이동 (step은 초기 값 1임)
    };

    // # 이메일 중복확인이 끝났을 때 호출될 함수
    const emailSuccessHandler = (email) => {
        setEnteredEmail(email); // verificationinput에 전달하는 용도
        nextStep(); // 다음 스텝으로 이동
    };

    return (
        <div className={styles.signupForm}>
            <div className={styles.formStepActive}>
                {step === 1 && <EmailInput onSuccess={emailSuccessHandler} />}
                {step === 2 && <VerificationInput email={enteredEmail} onSuccess={nextStep} />}
                {step === 3 && <PasswordInput  />}

                {success && <ProgressBar />}
            </div>
        </div>
    );
};

export default SignUpForm;