import { Link } from "react-router-dom";
export const Appbar = () => {
    return (
        <div className="border-b border-blue-300 bg-lightblue-50 flex justify-between items-center px-10 py-3 shadow-md">
            <div className="text-xl font-bold text-blue-900">
                ZoomPay
            </div>
            <div className="flex items-center space-x-6">
                <Link to="/signup">
                    <button
                        type="button"
                        className="text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-3 focus:ring-blue-300 font-medium rounded-full text-xs px-4 py-2 text-center shadow-lg transition-all duration-300"
                    >
                        New Account
                    </button>
                </Link>
                <Link to="/signin">
                    <button
                        type="button"
                        className="text-blue-900 hover:text-blue-700 focus:outline-none font-medium rounded-full text-xs px-4 py-2 transition-all duration-300"
                        onClick={() => localStorage.removeItem("token")}
                    >
                        Logout
                    </button>
                </Link>
            </div>
        </div>
    );
}
