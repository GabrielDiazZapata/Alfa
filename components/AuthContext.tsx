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

  const login = (email: string, password: string): boolean => {
    // Lógica de autenticación aquí, setea el usuario si la autenticación es exitosa
    const isLoginSuccessful = email === 'Gabriel' && password === '1234';
    if (isLoginSuccessful) {
      setUser(email);
    }
    return isLoginSuccessful;
  };

  const logout = (): void => {
    // Lógica de cierre de sesión aquí, por ejemplo, limpiar el usuario
    setUser(null);
  };

  const authContextValue: AuthContextType = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
};
