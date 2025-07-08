import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RequireAuth = () => {
	const { auth } = useAuth();
	const location = useLocation();
	console.log("RequireAuth", auth);
	return (
		auth?.isLogin
			? <Outlet />
			: <Navigate to='/admin/login' state={{from: location}} replace />
	);
}

export default RequireAuth; 