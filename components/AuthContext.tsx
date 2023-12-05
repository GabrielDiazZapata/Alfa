import React, { createContext, useContext, ReactNode, useState } from 'react';

type AuthContextProps = {
  children: ReactNode;
};

type AuthContextType = {
  user: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (email: string, password: string) => {
    // Lógica de autenticación aquí, setea el usuario si la autenticación es exitosa
    if (email === 'Gabriel' && password === '1234') {
      setUser(email);
      return true;
    }
    return false;
  };

  const logout = () => {
    // Lógica de cierre de sesión aquí, por ejemplo, limpiar el usuario
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
};
