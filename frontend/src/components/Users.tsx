import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface User {
    _id: string;
    username?: string;
    lastName?: string;
}

export const Users = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://bagpack-jade.vercel.app/api/v1/user/bulk");
                console.log(response.data.users);
                
                setUsers(response.data.users);
            } catch (error) {
                console.error("There was an error fetching the users!", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <>
            <div className="font-bold mt-6 text-lg">Users</div>
            <div>
                {users && users.length > 0 ? (
                    users.map(user => (
                        <UserComponent key={user._id} user={user} />
                    ))
                ) : (
                    <div>No users found</div>
                )}
            </div>
        </>
    );
};

interface UserProps {
    user: User;
}

function UserComponent({ user }: UserProps) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between mb-4">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.username ? user.username[0] : "?"}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <div>
                        {user.username} 
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <Button onClick={() => navigate(`/send?id=${user._id}&name=${user.username || "Unknown"}`)} label="Send Money" />
            </div>
        </div>
    );
}
