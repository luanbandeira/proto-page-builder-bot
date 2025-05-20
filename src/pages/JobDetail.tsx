
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import { Eye } from "lucide-react";

// Sample job data
const jobsData = {
  "1": {
    id: "1",
    title: "Analista de Suporte",
    company: "Inclusiva Tech",
    description: "Vaga para analista de suporte técnico com foco em atendimento ao cliente e resolução de problemas de software.",
    requirements: "Conhecimentos em sistemas operacionais, redes e atendimento ao cliente. Experiência prévia é um diferencial.",
    benefits: "Vale refeição, plano de saúde, vale transporte e horário flexível."
  }
};

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showSubmitOptions, setShowSubmitOptions] = useState(false);
  
  // Get job details based on id
  const job = id ? jobsData[id as keyof typeof jobsData] : undefined;
  
  if (!job) {
    return <div>Vaga não encontrada</div>;
  }
  
  const handleApply = () => {
    navigate(`/jobs/${id}/apply`);
  };
  
  return (
    <AppLayout showBackButton title={job.title}>
      <div className="p-4 pb-24">
        <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
        <p className="text-pcd-orange mb-6">{job.company}</p>
        
        <div className="mb-6 flex justify-end">
          <button className="flex items-center text-gray-600">
            <Eye size={16} className="mr-1" />
          </button>
        </div>
        
        <section className="mb-6">
          <h3 className="font-medium text-lg mb-3">Sobre a vaga:</h3>
          <div className="bg-gray-100 p-3 rounded-lg">
            <div className="bg-gray-200 h-3 w-11/12 rounded mb-2"></div>
            <div className="bg-gray-200 h-3 w-10/12 rounded mb-2"></div>
            <div className="bg-gray-200 h-3 w-full rounded"></div>
          </div>
        </section>
        
        <section className="mb-6">
          <h3 className="font-medium text-lg mb-3">O que você precisa saber:</h3>
          <div className="bg-gray-100 p-3 rounded-lg">
            <div className="bg-gray-200 h-3 w-11/12 rounded mb-2"></div>
            <div className="bg-gray-200 h-3 w-10/12 rounded"></div>
          </div>
        </section>
        
        <section className="mb-10">
          <h3 className="font-medium text-lg mb-3">Benefícios:</h3>
          <div className="bg-gray-100 p-3 rounded-lg">
            <div className="bg-gray-200 h-3 w-11/12 rounded mb-2"></div>
            <div className="bg-gray-200 h-3 w-10/12 rounded mb-2"></div>
            <div className="bg-gray-200 h-3 w-9/12 rounded"></div>
          </div>
        </section>
        
        {!showSubmitOptions ? (
          <button 
            onClick={() => setShowSubmitOptions(true)}
            className="pcd-button-primary w-full"
          >
            Enviar portfólio
          </button>
        ) : (
          <div className="space-y-4">
            <button className="bg-gray-200 w-full py-3 px-4 rounded-lg flex items-center justify-center font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Baixar Pórtfolio Modelo
            </button>
            
            <div className="bg-gray-100 py-6 rounded-lg flex flex-col items-center">
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"></path>
                  <path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"></path>
                </svg>
              </div>
              <span className="text-gray-600">Enviar Pórtfolio</span>
            </div>
            
            <button 
              onClick={handleApply} 
              className="pcd-button-primary w-full"
            >
              Candidate-se
            </button>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

export default JobDetail;
