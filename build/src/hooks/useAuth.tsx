import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar se há uma sessão salva
    const savedUser = localStorage.getItem("auth_user");
    const sessionUser = sessionStorage.getItem("auth_user");
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else if (sessionUser) {
      setUser(JSON.parse(sessionUser));
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, rememberMe = false) => {
    // Simulação de autenticação
    if (email === "aluno@aluno.com" && password === "aluno123") {
      const mockUser: User = {
        id: "1",
        name: "Aluno",
        email: "aluno@aluno.com"
      };

      setUser(mockUser);
      
      // Salvar conforme preferência do usuário
      if (rememberMe) {
        localStorage.setItem("auth_user", JSON.stringify(mockUser));
      } else {
        sessionStorage.setItem("auth_user", JSON.stringify(mockUser));
      }
    } else {
      throw new Error("Credenciais inválidas");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth_user");
    sessionStorage.removeItem("auth_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};