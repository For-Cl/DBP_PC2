import {useState, type FormEvent} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import api from '../api/axiosConfig';
import {useAuth} from '../components/auth/useAuth';

export default function LoginPage() {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const {login} useAuth();
    const navigate=useNavigate();

    const handleSubmit = async(e:FormEvent)=>{
        e.preventDefault();
        try{
            const res=await api.post('/api/auth/login',{email, password});
            login(res.data.token, email);
            navigate('/');
        } catch {
            alert('Credenciales Incorrectas');
        }
    };

    return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-72 p-6 bg-slate-900 border border-slate-800 rounded-xl">
      <h2 className="text-xl font-bold text-center">Iniciar sesion</h2>
      <input
        className="p-2 bg-slate-950 border border-slate-700 rounded text-white"
        type="email"
        placeholder="Correo"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        className="p-2 bg-slate-950 border border-slate-700 rounded text-white"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button className="p-2 bg-orange-500 hover:bg-orange-600 rounded font-bold text-white cursor-pointer" type="submit">
        Ingresar
      </button>
      <Link className="text-xs text-orange-400 text-center" to="/register">
        ¿No tienes cuenta? Registrate
      </Link>
    </form>
  );
}