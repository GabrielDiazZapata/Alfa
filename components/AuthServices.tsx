
const apiUrl = 'http://192.168.1.135:8888';

export interface User {
  id: number;
  name: string;
  email: string;
}

interface LoginResponse {
  ok: boolean;
  message: string;
  user: User;
}

export const login = async (name: string, password: string): Promise<boolean> => {
  try {
    const response = await fetch(`${apiUrl}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    });

    const data: LoginResponse = await response.json();

    return response.ok;
  } catch (error: any) {
    if (error instanceof TypeError) {
      console.error('Error de red: No hay conexión a internet.');
    } else {
      console.error('Error de red:', error.message);
    }
    return false;
  }
};

export const register = async (email: string, password: string): Promise<boolean> => {
  try {
    const response = await fetch(apiUrl + '/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    return response.ok;
  } catch (error: any) {
    if (error instanceof TypeError) {
      console.error('Error de red: No hay conexión a internet.');
    } else {
      console.error('Error de red:', error.message);
    }
    return false;
  }
};

export const logout = async (): Promise<void> => {
  try {
    const response = await fetch(apiUrl + '/users/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
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
