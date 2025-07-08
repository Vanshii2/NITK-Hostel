import { useState } from 'react';
import styles from '../styles/adminlogin.module.css';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

const USER_REGEX = /^[A-z][A-z0-9_]{3,13}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const AdminLogin = () => {
    const [username, setUsername] = useLocalStorage('username', '');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useLocalStorage('rememberMe', false);
    const axiosPrivate = useAxiosPrivate();
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/admin';
    const handleSubmit = async (e) => { 
        e.preventDefault();
        if (!USER_REGEX.test(username)) {
            toast.error('Invalid username');
            return;
        }
        if (!PWD_REGEX.test(password)) {
            toast.error('Invalid password');
            return;
        }
        // use promise toast to show loading as we are waiting for the response
        toast.promise(
            axiosPrivate.post('/api/admin/login', { username, password }),
            {
                loading: 'Logging in...',
                success: 'Login successful',
                error: (err) => {
                    return err.response.data.message || 'Login failed';
                }
            }
        ).then(res => { 
            setAuth(prev => {
                return {
                    ...prev,
                    isLogin: true,
                    ...res.data
                }
            });
            navigate(from, { replace: true });
        }).catch(err => {
            // toast.error(err.response.data.message);
        });
    }
    return (
        <>
            <div className={styles.background}>
                <div className={styles.container}>
                    <h2> Admin Login</h2>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label>
                            Username: 
                            <input type='text' placeholder='Enter UserName' value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </label>
                        <label>
                            Password:
                            <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </label>
                        <label>
                            <input type='checkbox' checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/>
                            Remember me
                        </label>
                        <button className={styles.button} type='submit'>Login</button>
                        {/* make a remember me checkbox */}
                    </form>
                </div>
            </div>
        </>
    );
};
export default AdminLogin;