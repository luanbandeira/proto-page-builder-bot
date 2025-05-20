
import { useNavigate } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import { Eye } from "lucide-react";

const AboutApp = () => {
  const navigate = useNavigate();
  
  return (
    <AppLayout showBackButton>
      <div className="p-4 pb-20">
        <div className="flex justify-between mb-6">
          <img src="/pcd-logo.svg" alt="PCDConnect Logo" className="w-16 h-16" />
          <button>
            <Eye size={24} className="text-gray-700" />
          </button>
        </div>
        
        <h1 className="text-2xl font-semibold text-pcd-purple mb-1">Somos o PCDConnect</h1>
        <h2 className="text-pcd-orange text-lg mb-8">
          Conectando talentos a oportunidades 100% inclusivas!
        </h2>
        
        <div className="space-y-8">
          <div className="flex">
            <div className="w-12 h-12 rounded-full border border-pcd-primary flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pcd-primary">
                <circle cx="12" cy="8" r="5"></circle>
                <path d="M20 21a8 8 0 1 0-16 0"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-pcd-purple">Crie seu perfil</h3>
              <p className="text-pcd-orange">
                Adicione suas informações de forma acessível e personalizada.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-12 h-12 rounded-full border border-pcd-primary flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pcd-primary">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-pcd-purple">Busque vagas</h3>
              <p className="text-pcd-orange">
                Filtre oportunidades no seu perfil.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="w-12 h-12 rounded-full border border-pcd-primary flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pcd-primary">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-pcd-purple">Candita-se com facilidade</h3>
              <p className="text-pcd-orange">
                Envie seu currículo ou portfólio em poucos cliques.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 p-4 bg-pcd-light-green rounded-xl">
          <p className="text-pcd-primary mb-6">
            Nosso App é inteiramente pensando para pessoas portadoras de deficiência e oferecemos todo
            suporte para propocionar uma ótima experiência!
          </p>
          
          <div className="flex justify-end">
            <img src="https://images.unsplash.com/photo-1617247882224-1b5802b2f38c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Person in wheelchair using a computer" className="w-20 h-20 object-cover" />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AboutApp;
