import {Outlet, Link} from 'react-router-dom';
import {useAuth} from './auth/useAuth';

export default function Layout() {
  const { isAuthenticated, user } = useAuth();
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6">
        <Link to="/" className="font-bold text-lg text-white">CampusCultura</Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link to="/activities" className="hover:text-red-400">Inscripcion</Link>
          <Link to="/my-enrollments" className="hover:text-red-400">Mis operaciones</Link>

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <span className="text-slate-400">{user}</span>
              <Link to="/auth/logout" className="text-xs text-red-400 hover:text-red-300">Salir</Link>
            </div>
          ) : (
            <Link to="/auth/login" className="bg-red-600 px-3 py-1.5 rounded-lg">Login</Link>
          )}
        </nav>
      </header>
      <main className="flex-1 max-w-7xl mx-auto w-full p-6">
        <Outlet />
      </main>
    </div>
  );
}
