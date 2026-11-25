import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from './auth/useAuth';

export default function ProtectedRoute({children}:{children ? : React.ReactNode}){
    const {token}=useAuth();
    if (!token) return <Navigate to="/auth/login" replace/>;
    return children ? <> {children}</>:<Outlet/>;
}