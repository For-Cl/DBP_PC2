import {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../auth/useAuth';

export default function Logout() {
    const {logout} = useAuth();
    useEffect(() => {logout();},[logout]);
    return <Navigate to = "/auth/login" replace/>;
}
