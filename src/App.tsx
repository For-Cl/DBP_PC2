import { Routes, Route Navigate} from 'react-router-dom';
import { AuthProvider} from './components/auth/useAuth';

import LayoutLogin from './components/LayoutLogin';

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
          <Route path="/" element={<Navigate to= "/home" replace/>}/>
          <Route path="/home" element={<HomePage/>}/>
        </Route>

        <Route element={<ProtectedRoute><Layout/></ProtectedRoute>}>
          <Route path="/asd" element={<asdPage/>}/>
          <Route path="/auth/logout" element={<Logout/>}/>
        </Route>

  )
}

export default App
