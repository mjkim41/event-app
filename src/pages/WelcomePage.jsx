import { useEffect, useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import Main from "../components/Main";
import { useLoaderData } from "react-router-dom";

const WelcomePage = () => {

    const userData = useLoaderData();
    console.log(userData);

    return (
        <>
            {userData ? <Main userData={userData} /> : <LoginForm />}
        </>
    );
};

export default WelcomePage;