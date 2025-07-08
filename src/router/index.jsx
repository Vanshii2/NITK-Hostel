import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Home from '../pages/Home';
import Hostels from '../pages/Hostels';
import People from '../pages/People';
import Gallery from '../pages/Gallery';
import AdminLogin from '../pages/AdminLogin';
import AdminDashboard from '../pages/AdminDashboard';
import { AuthProvider } from '../context/AuthProvider';
import RequireAuth from '../components/common/RequireAuth';
import PersistLogin from '../components/common/PersistLogin';

const router = createBrowserRouter([
    {
        path: '/admin',
        element: <AuthProvider><PersistLogin /></AuthProvider>,
        children: [
            {
                element: <RequireAuth />,
                children: [
                    {
                        path: '',
                        element: <AdminDashboard />
                    }
                ]
            }
        ]
    },
    {
        path: '/admin/login',
        element: <AuthProvider><AdminLogin /></AuthProvider>
    },
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'hostels',
                element: <Hostels />
            },
            {
                path: 'people',
                element: <People />
            },
            {
                path: 'gallery',
                element: <Gallery/>
            }
        ]
    },
])

export default router;