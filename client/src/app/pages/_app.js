// pages/_app.js
import '../styles/globals.css'; // Import any global styles
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('token');
        if (!token && router.pathname !== '/login') {
            router.push('/login');
        }
    }, [router.pathname]);

    return <Component {...pageProps} />;
}

export default MyApp;
