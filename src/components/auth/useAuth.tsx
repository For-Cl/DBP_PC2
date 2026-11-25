import{createContext,useContext, type ReactNode, type FC } from 'react';
import{useLocalStorage } from '../../hooks/useLocalStorage';

export const AuthContext=createContext<any>(null);

export const AuthProvider: FC<{ children: ReactNode}>=({children}) => {
  const [token, setToken]=useLocalStorage('token', '');
  const [user, setUser]=useLocalStorage('user', '');

  const login=(newToken: string, userVal?: string) => {
    setToken(newToken);
    if (userVal) setUser(userVal);
  };

  const logout=() => {
    setToken('');
    setUser('');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated: Boolean(token) }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth=() => useContext(AuthContext);