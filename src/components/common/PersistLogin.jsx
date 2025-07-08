import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRefreshToken from '../../hooks/useRefreshToken';
import useAuth from '../../hooks/useAuth';
import useLocalStorage from '../../hooks/useLocalStorage';

const PersistLogin = () => {
	const refreshToken = useRefreshToken();
	const [isLoading, setIsLoading] = useState(true);
	const [rememberMe, setRememberMe] = useLocalStorage('rememberMe', false);
    console.log("rememberMe", rememberMe);
	const { auth } = useAuth();

	useEffect(() => {
		let isMounted = true;
		
		const verifyRefreshToken = async () => {
			try {
				await refreshToken();
			} catch (err) {
				setRememberMe(false);
			} finally {
				isMounted && setIsLoading(false);
			}
		}
		!auth?.isLogin && rememberMe ? verifyRefreshToken() : setIsLoading(false);

		return () => isMounted = false;
	}, [])

	return (
		<>
			{!rememberMe
				? <Outlet />
				: isLoading
					? <p>Loading...</p>
					: <Outlet />
			}
		</>
	)
}

export default PersistLogin;