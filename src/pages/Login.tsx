
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <AppLayout showNav={false}>
      <div className="min-h-screen flex flex-col bg-pcd-primary">
        <div className="flex-1 flex flex-col items-center pt-12 pb-6 px-6">
          <img src="/pcd-logo.svg" alt="PCDConnect Logo" className="w-24 h-24 mb-6" />
          
          <div className="w-full bg-white rounded-t-3xl flex-1 p-6">
            <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pcd-input pl-10"
                    placeholder="Insira seu email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pcd-input pl-10"
                    placeholder="Insira sua senha"
                    required
                  />
                </div>
              </div>
              
              <div className="text-center">
                <Link to="/forgot-password" className="text-sm text-gray-500">
                  Esqueceu a senha? <span className="text-pcd-orange underline">Clique Aqui!</span>
                </Link>
              </div>
              
              <button 
                type="submit" 
                className="pcd-button-primary w-full"
                disabled={isLoading}
              >
                {isLoading ? "Entrando..." : "Entrar"}
              </button>
              
              <div className="text-center text-gray-500">Ou</div>
              
              <div className="flex justify-center space-x-6">
                <button type="button" className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </button>
                
                <button type="button" className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
                  </svg>
                </button>
                
                <button type="button" className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="bg-white py-4 flex justify-center space-x-20">
          <Link to="/login" className="flex flex-col items-center text-pcd-primary font-medium">
            <div className="w-3 h-3 rounded-full bg-pcd-primary mb-1"></div>
            <span>Login</span>
          </Link>
          
          <Link to="/register" className="flex flex-col items-center text-gray-400">
            <div className="w-3 h-3 rounded-full bg-gray-200 mb-1"></div>
            <span>Cadastrar-se</span>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default Login;
