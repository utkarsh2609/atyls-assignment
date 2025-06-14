import { useState } from "react";
import LoginIcon from "../../assets/images/login.svg";

const AuthForm = () => {
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
                    <h2 className="text-2xl font-bold text-center mt-2 mb-1">Create an account to continue</h2>
                    <p className="text-gray-400 text-center mb-6 text-base">
                        Create an account to access all the features on this app
                    </p>
                </div>
                <form className="space-y-4">
                    <div>
                        <label className="block font-semibold mb-1 text-gray-900 text-sm">Email or username</label>
                        <input
                            type="text"
                            placeholder="Enter your email or username"
                            className="w-full rounded-xl bg-gray-100 px-4 py-3 text-base outline-none focus:ring-2 focus:ring-indigo-400"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1 text-gray-900 text-sm">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full rounded-xl bg-gray-100 px-4 py-3 text-base outline-none focus:ring-2 focus:ring-indigo-400"
                            value={form.password}
                            onChange={e => setForm({ ...form, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block font-semibold mb-1 text-gray-900 text-sm">Repeat password</label>
                        <input
                            type="password"
                            placeholder="Enter your password again"
                            className="w-full rounded-xl bg-gray-100 px-4 py-3 text-base outline-none focus:ring-2 focus:ring-indigo-400"
                            value={form.repeatPassword}
                            onChange={e => setForm({ ...form, repeatPassword: e.target.value })}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl py-3 text-base transition"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
            <div className="text-center text-gray-400 mt-3.5 mb-1 text-base">
                Already have an account?
                <button
                    className="ml-1 text-indigo-600 font-semibold hover:underline"
                    type="button"
                    onClick={() => { console.log("Switch to Sign In") }
                    }
                >
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default AuthForm;