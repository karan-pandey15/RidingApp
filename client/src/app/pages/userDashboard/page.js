// frontend/pages/dashboardTwo.js
"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const DashboardTwoPage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('token');
        if (!token) {
            router.push('/pages/userSignin');
        } else {
            axios
                .get('http://localhost:5010/api/auth/userdata', {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    setUser(response.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error('Failed to fetch user data:', err);
                    Cookies.remove('token');
                    router.push('/pages/userSignin');
                });
        }
    }, [router]);

    const handleLogout = () => {
        Cookies.remove('token');
        router.push('/pages/userSignin');
    };

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen bg-gray-100"><p className="text-gray-500">Loading...</p></div>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 space-y-4 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-900 text-center">Dashboard</h1>
                {user ? (
                    <div className="space-y-4">
                        <p className="text-lg text-gray-700"><strong className="font-semibold">Name:</strong> {user.name}</p>
                        <p className="text-lg text-gray-700"><strong className="font-semibold">Email:</strong> {user.email}</p>
                        <p className="text-lg text-gray-700"><strong className="font-semibold">Phone:</strong> {user.phone}</p>
                        <p className="text-lg text-gray-700"><strong className="font-semibold">Address:</strong> {user.address}</p>
                        <p className="text-lg text-gray-700"><strong className="font-semibold">City:</strong> {user.city}</p>
                        <p className="text-lg text-gray-700"><strong className="font-semibold">PIN:</strong> {user.pin}</p>
                        <button
                            onClick={handleLogout}
                            className="w-full py-2 px-4 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Logout
                        </button>

                        <button 
                            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Request
                        </button>
                        
                    </div>
                ) : (
                    <p className="text-gray-700 text-center">No user data available</p>
                )}
            </div>
        </div>
    );
};

export default DashboardTwoPage;
