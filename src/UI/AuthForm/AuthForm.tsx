import { useEffect, useState } from "react";
import LoginIcon from "../../assets/images/login.svg";
import InputField from "../InputField/InputField";

const AuthForm = () => {
    const signInFormContent = {
        formHeader: 'Sign in to continue',
        formSubHeader: 'Sign in to access all the features on this app',
        formFooter: 'Do not have and account?',
        footerBtnLable: 'Sign Up',
    }
    const [isSignIn, setIsSignIn] = useState(true);
    const [formContent, setFormContent] = useState(signInFormContent);

    useEffect(() => {
        if (isSignIn) {
            setFormContent(signInFormContent);
        } else {
            setFormContent({
                formHeader: 'Create an account to continue',
                formSubHeader: 'Create an account to access all the features on this app',
                formFooter: 'Already have an account?',
                footerBtnLable: 'Sign In',
            });
        }
    } , [isSignIn]);

    const [form, setForm] = useState({
        email: "",
        password: "",
        repeatPassword: "",
    });

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
                <form className="space-y-4">
                    <InputField placeholder="Enter your email or username" label="Email or username" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}/>
                    <InputField placeholder="Enter your password" label="Password" value={form.password} onChange={e => setForm({ ...form,password: e.target.value })}/>
                    {
                        !isSignIn && 
                        <InputField placeholder="Enter your password again" label="Repeat password" value={form.repeatPassword} onChange={e => setForm({ ...form, repeatPassword: e.target.value })}/>
                    }
                    <button
                        type="submit"
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