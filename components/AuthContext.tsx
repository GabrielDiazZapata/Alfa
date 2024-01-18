import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextProps = {
  children: ReactNode;
};

export interface User {
  id: number;
  name: string;
  email: string;
}

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
};

interface LoginResponse {
  ok: boolean;
  message: string;
  user: User;
}

const apiUrl = 'http://172.16.100.150:8888';
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (name: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch(`${apiUrl}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      const data: LoginResponse = await response.json();

      if (response.ok) {
        setUser(data.user || null);
        await AsyncStorage.setItem('user', JSON.stringify(data.user || null));
        return true;
      } else {
        console.error('Error en el login:', data.message);
        return false;
      }
    } catch (error: any) {
      if (error instanceof TypeError) {
        console.error('Error de red: No hay conexión a internet.');
      } else {
        console.error('Error de red:', error.message);
      }
      return false;
    }
  };

  const register = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch(apiUrl + '/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        console.error('Error en la solicitud de registro:', response.statusText);
        return false;
      }

      const data: LoginResponse = await response.json();

      if (response.ok) {
        setUser(data.user);
        await AsyncStorage.setItem('user', JSON.stringify(data.user));
        return true;
      } else {
        console.error('Error en el registro:', data.message);
        return false;
      }
    } catch (error: any) {
      if (error instanceof TypeError) {
        console.error('Error de red: No hay conexión a internet.');
      } else {
        console.error('Error de red:', error.message);
      }
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      const response = await fetch(apiUrl + '/users/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setUser(null);
        await AsyncStorage.removeItem('user');
      } else {
        console.error('Error al cerrar sesión:', response.statusText);
      }
    } catch (error: any) {
      if (error instanceof TypeError) {
        console.error('Error de red: No hay conexión a internet.');
      } else {
        console.error('Error de red:', error.message);
      }
    }
  };

  useEffect(() => {
    const retrieveUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    retrieveUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
};
