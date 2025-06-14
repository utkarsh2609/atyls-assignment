import { useEffect, useState } from "react";
import AuthForm from "../UI/AuthForm/AuthForm";
import Modal from "../UI/Modal/Modal";

const Auth = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        console.log('Auth component mounted');
        setIsOpen(true);
    }, []);

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