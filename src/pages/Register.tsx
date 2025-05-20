
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [searchParams] = useSearchParams();
  const userType = searchParams.get("type") || "candidate";
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { register } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (password !== confirmPassword) {
      setError("As senhas não conferem");
      return;
    }
    
    setIsLoading(true);
    
    try {
      await register(email, password, userType as "candidate" | "company");
      
      if (userType === "candidate") {
        navigate("/candidate-form");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Falha no cadastro. Tente novamente.");
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
              {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}
              
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
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pcd-input pl-10"
                  placeholder="Insira novamente"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="pcd-button-primary w-full"
                disabled={isLoading}
              >
                {isLoading ? "Cadastrando..." : "Cadastrar"}
              </button>
            </form>
          </div>
        </div>
        
        <div className="bg-white py-4 flex justify-center space-x-20">
          <Link to="/login" className="flex flex-col items-center text-gray-400">
            <div className="w-3 h-3 rounded-full bg-gray-200 mb-1"></div>
            <span>Login</span>
          </Link>
          
          <Link to="/register" className="flex flex-col items-center text-pcd-primary font-medium">
            <div className="w-3 h-3 rounded-full bg-pcd-primary mb-1"></div>
            <span>Cadastrar-se</span>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default Register;
