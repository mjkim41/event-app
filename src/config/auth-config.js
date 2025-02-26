import {redirect, useSubmit} from "react-router-dom";

const USER_DATA_KEY = 'userData';

// 로그인한 유저의 정보를 로컬스토리지로부터 불러오는 함수
const getUserData = () => {
  const userDataJson = localStorage.getItem(USER_DATA_KEY);
  return userDataJson ? JSON.parse(userDataJson) : null;
};

// 로그인한 회원의 정보를 불러오는 loader
export const userDataLoader = () => {
  // console.log('userDataLoader call!');
  return getUserData(); // loader가 리턴한 데이터는 loader가 걸린 페이지 및 하위 컴포넌트에서 사용가능
};


// 로그아웃 액션 함수
export const logoutAction = () => {
  localStorage.removeItem(USER_DATA_KEY);
  return redirect('/');
}

// 로그인 여부를 알려주는 함수
const isLoggedIn = () => {
  return getUserData() !== null;
};

// 로그인 여부를 검사하여 로그인하지 않았따면 로그인페이지로 redirect 하는 로더
export const authCheckLoader = () => {
  if(!isLoggedIn()) {
    alert('로그인 필요');
    return redirect('/'); //  로그인 페이지로 이동
  }
  return null; // 현재 페이지에 머뭄
}

// 인증 토큰을 가져다주는 함수
export const getUserToken = () => {
  return getUserData()?.token;
}

// 권한을 가져다 후는 함수
export const getUserRole = () => {
  return getUserData()?.role;
}