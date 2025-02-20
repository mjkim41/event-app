import styles from './SignUpForm.module.scss';
import EmailInput from './EmailInput';
import VerificationInput from "./VerificationInput.jsx";
import {useState} from "react";
import ProgressBar from "../common/ProgressBar.jsx";

const SignUpForm = () => {

    // 현재 어떤 스텝에 위치하고 있는지
    const [step, setStep] = useState(1);

    // 다음 스텝으로 넘어가는 여부
    const [success, setSuccess] = useState(false);

    // 이메일 중복확인이 끝났을 떄 호출될 함수
    const emailSuccessHandler = () => {

        setSuccess(true);
        setTimeout(() => {
            setStep(2)
            setSuccess(false);
        }, 1000);

    }

    return (
        <div className={styles.signupForm}>
            <div className={styles.formStepActive}>

                {step === 1 && <EmailInput onSuccess={emailSuccessHandler}/>}
                {step === 2 && <VerificationInput />}

                {success && <ProgressBar />}

            </div>
        </div>
    );
};

export default SignUpForm;