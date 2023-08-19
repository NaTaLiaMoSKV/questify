import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const RestrictedAuthRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const userName = localStorage.getItem('userName');
    if (!userName) return <Navigate to={redirectTo} /> 
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedAuthRoute;