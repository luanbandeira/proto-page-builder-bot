
import { useAuth } from "../context/AuthContext";
import AppLayout from "../components/AppLayout";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <AppLayout>
      <div className="p-6 pb-20">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-pcd-purple text-2xl font-semibold">
              Olá, {user?.name || "Usuário"}
            </h2>
            <div className="flex mt-2">
              <div className="w-3 h-3 rounded-full bg-pcd-orange mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-pcd-purple mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-pcd-primary mr-2"></div>
            </div>
          </div>
          
          <button className="p-1">
            <Eye size={24} className="text-gray-700" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link to="/jobs" className="pcd-card flex flex-col items-center p-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">Buscar vagas</span>
          </Link>
          
          <Link to="/applications" className="pcd-card flex flex-col items-center p-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <path d="M14 2v6h6"></path>
                <path d="m9 15 2 2 4-4"></path>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">Candidaturas</span>
          </Link>
          
          <Link to="/profile" className="pcd-card flex flex-col items-center p-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <circle cx="12" cy="8" r="5"></circle>
                <path d="M20 21a8 8 0 1 0-16 0"></path>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">Perfil</span>
          </Link>
          
          <Link to="/notifications" className="pcd-card flex flex-col items-center p-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">Notificações</span>
          </Link>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="w-5 h-5 bg-pcd-orange rounded-sm mr-2"></div>
          <h3 className="text-pcd-orange font-medium">Entenda como funciona o App!</h3>
        </div>
        
        <Link to="/about-app" className="block">
          <img src="/about-app-illustration.jpg" alt="App explanation" className="w-full rounded-lg h-40 object-cover" />
        </Link>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
