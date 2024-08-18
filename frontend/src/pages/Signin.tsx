import { useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Signin = () => {
    const [username, setUsername] = useState("");
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
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="xyz@abc.com"
                        label="Email"
                    />
                    <InputBox
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="123456"
                        label="Password"
                    />
                </div>
                <div className="mt-6">
                    <Button
                        onClick={async () => {
                            const response = await axios.post("https://bagpack-jade.vercel.app/api/v1/user/signin", {
                                username,
                                password
                            });
                            localStorage.setItem("token", response.data.token);
                            navigate("/dashboard");
                        }}
                        label="Sign In"
                    />
                </div>
                <div className="mt-6 text-center text-gray-300">
                    <span>Don't have an account? </span>
                    <Link
                        to="/signup"
                        className="text-blue-500 hover:text-blue-700 font-medium"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}
