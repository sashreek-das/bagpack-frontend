import { useState } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';


export function SendMoney() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState("");
    const navigate = useNavigate();

    const handleSendMoney = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(
                "https://bagpack-jade.vercel.app/api/v1/account/transfer",
                { to : id, amount },
                {
                    headers: {
                        Authorization: `${token}`
                    }
                }
            );
            alert(`Sent ${amount} to ${name}. Response: ${response.data.message}`);
            navigate("/dashboard");
        } catch (error) {
            alert("Error sending money. Please try again.");
            console.error("Error sending money :", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-300">
                <div className="space-y-4 mt-4">
                    <InputBox
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Amount"
                        label="Amount"
                    />
                </div>
                <div className="mt-6">
                    <Button
                        onClick={handleSendMoney}
                        label="Send Money"
                    />
                </div>
            </div>
        </div>
    );
}
