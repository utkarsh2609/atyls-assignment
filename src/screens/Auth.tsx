import { useEffect, useState } from "react";
import AuthForm from "../UI/AuthForm/AuthForm";
import Modal from "../UI/Modal/Modal";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Auth = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useAuth();


    useEffect(() => {
        console.log('Auth component mounted', user);
        if (user) {
            // If user is already authenticated, redirect to home
            navigate('/');
        } else {
            setIsOpen(true);
        }
    }, [user]);


    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Authentication</h1>
            <p className="text-gray-600 mb-6">Please log in to continue.</p>
            <Modal showCloseBtn={true} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <AuthForm />
            </Modal>
        </div>
    );
}
export default Auth;