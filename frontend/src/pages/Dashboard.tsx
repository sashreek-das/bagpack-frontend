import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { useEffect, useState } from "react";
import { Users } from "../components/Users";

export const Dashboard = () => {
    const [balance, setBalance] = useState<number | null>(null);

    useEffect(() => {
        axios.get("https://bagpack-jade.vercel.app/api/v1/account/balance", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setBalance(response.data.balance);
        });
    }, []); 

    return (
        <div>
            <Appbar />
            <div className="m-8">
                {balance !== null ? <Balance value={balance} /> : "Loading..."}
            </div>
            <div>
                <Users/>
            </div>
        </div>
    );
};
