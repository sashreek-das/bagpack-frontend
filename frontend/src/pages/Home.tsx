import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
            <div className="text-center space-y-6 p-6 bg-gray-800 rounded-lg shadow-xl">
                <div className="text-4xl font-bold animate-fade-in">
                    Welcome to ZOOMPAY
                </div>
                <div className="text-lg font-semibold animate-fade-in">
                    Your seamless payment solution
                </div>
                <div>
                    <Link to="/signup">
                        <button
                            type="button"
                            className="text-black bg-white border border-gray-300 hover:bg-gray-300 transition-colors duration-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none animate-bounce"
                        >
                            Start Paying
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Add the custom CSS directly in the same file
const styles = document.createElement('style');
styles.innerHTML = `
@keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

.animate-fade-in {
    animation: fade-in 1.5s ease-in-out;
}

.animate-bounce {
    animation: bounce 2s infinite;
}
`;
document.head.appendChild(styles);
