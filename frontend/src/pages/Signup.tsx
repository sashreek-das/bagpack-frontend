import { useState } from "react";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

export function Signup() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-800">
                <div className="text-center">
                    <Heading label="ZoomPay" />
                </div>
                <div className="space-y-4 mt-4">
                    <InputBox
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="xyz@abc.com"
                        label="Email"
                    />
                    <InputBox
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="123456"
                        label="Password"
                    />
                    <InputBox
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        label="First Name"
                    />
                    <InputBox
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        label="Last Name"
                    />
                </div>
                <div className="mt-6">
                    <Button
                        onClick={async () => {
                            const response = await axios.post("https://bagpack-jade.vercel.app/api/v1/user/signup", {
                                username,
                                password,
                                firstname,
                                lastname,
                            });
                            localStorage.setItem("token", response.data.token);
                            navigate("/dashboard")
                        }}
                        label="Sign Up"
                    />
                    <div className="text-center mt-6">
                        <span className="text-gray-600 text-sm">
                            Have an account?{' '}
                            <Link
                                to="/signin"
                                className="text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-sm transition-colors duration-300"
                            >
                                Sign In
                            </Link>
                        </span>
                    </div>



                </div>
            </div>
        </div>
    );
}
