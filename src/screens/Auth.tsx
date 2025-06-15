import { useEffect } from "react";
import AuthForm from "../UI/AuthForm/AuthForm";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Auth = () => {
    const navigate = useNavigate();
    const { user } = useAuth();


    useEffect(() => {
        console.log('Auth component mounted', user);
        if (user) {
            // If user is already authenticated, redirect to home
            navigate('/');
        }
    }, [user]);


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <AuthForm />
        </div>
    );
}
export default Auth;