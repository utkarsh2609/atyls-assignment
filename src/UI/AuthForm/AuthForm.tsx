import { useEffect, useState } from "react";
import LoginIcon from "../../assets/images/login.svg";
import InputField from "../InputField/InputField";
import { apiCall } from "../../utils/utilities";
import { signInFormContent, signUpFormContent } from "../../utils/constants";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const AuthForm = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [formContent, setFormContent] = useState(signInFormContent);
    const { user, login, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSignIn) {
            setFormContent(signInFormContent);
        } else {
            setFormContent(signUpFormContent);
        }
    }, [isSignIn]);

    const [form, setForm] = useState({
        email: "",
        password: "",
        repeatPassword: "",
    });

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (isSignIn) {
            // Handle sign in logic
            console.log("Signing in with:", form);
            signInApi(form.email, form.password, true)
        } else {
            // Handle sign up logic
            if (form.password !== form.repeatPassword) {
                alert("Passwords do not match!");
                return;
            }
            signInApi(form.email, form.password, false)
            console.log("Signing up with:", form);
        }
        // Reset form after submission
        setForm({ email: "", password: "", repeatPassword: "" });
    }

    const signInApi = async (email: string, password: string, isLogin: boolean) => {
        try {
            const response = await apiCall('POST', `https://reqres.in/api/${isLogin ? 'login': 'register'}`, { email, password });
            console.log('signInApi response =', response);
            const userData = {username: email.toString().split('.')[0], email, token: response.token}
            login(userData);
            navigate('/');
        }catch (error) {
            console.error('Sign in failed:', error);
        }
    };

    return (
        <div className="bg-gray-200 p-2.5 rounded-2xl">
            <div className="w-[498px] bg-white rounded-2xl shadow-xl p-8">
                <div className="flex flex-col items-center">
                    <div className="w-[53px] h-[53px] rounded-full bg-gray-100 flex items-center justify-center mb-4 shadow">
                        <img src={LoginIcon} alt="" className="w-8 h-8 text-gray-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-center mt-2 mb-1">{formContent.formHeader}</h2>
                    <p className="text-gray-400 text-center mb-6 text-base">
                        {formContent.formSubHeader}
                    </p>
                </div>
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <InputField placeholder="Enter your email or username" label="Email or username" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    <InputField placeholder="Enter your password" label="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
                    {
                        !isSignIn &&
                        <InputField placeholder="Enter your password again" label="Repeat password" value={form.repeatPassword} onChange={e => setForm({ ...form, repeatPassword: e.target.value })} />
                    }
                    <button type="submit"
                        className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-3 text-base transition cursor-pointer"
                    >
                        {isSignIn ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>
            </div>
            <div className="text-center text-gray-400 mt-3.5 mb-1 text-base">
                {formContent.formFooter}
                <button
                    className="ml-1 text-indigo-600 font-semibold hover:underline cursor-pointer"
                    type="button"
                    onClick={() => { setIsSignIn(prev => !prev) }
                    }
                >
                    {formContent.footerBtnLable}
                </button>
            </div>
        </div>
    );
};

export default AuthForm;