import { Routes, Route, Navigate} from 'react-router-dom';
import { AuthProvider} from './components/auth/useAuth';

import LayoutLogin from './components/LayoutLogin';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Logout from './components/Logout';
import LoginPage from './components/LoginPage';
import ResgisterPage from './components/RegisterPage';
import DashboardPage from './components/DashboardPage';


function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route element={<LayoutLogin/>}>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/auth/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/auth/register" element={<RegisterPage/>}/>
        </Route>

        <Route element={<Layout/>}>
          <Route path="/" element={<Navigate to= "/dashboard" replace/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
        </Route>

        <Route element={<ProtectedRoute><Layout/></ProtectedRoute>}>
          <Route path="/asd" element={<asdPage/>}/>
          <Route path="/auth/logout" element={<Logout/>}/>
        </Route>
      </Routes>
    </AuthProvider>

  )
}

export default App
