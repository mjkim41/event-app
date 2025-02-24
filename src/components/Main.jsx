
const Main = ({userData}) => {

    const {role, email} = userData;

    const userName = email.split('@')[0];

    return (
        <>
            <h2>{userName}님, ㅎㅇㅎㅇ</h2>
            <h3>현재 권한  [ {role} ]</h3>
            <button>로그아웃</button>
        </>
    );
};

export default Main;