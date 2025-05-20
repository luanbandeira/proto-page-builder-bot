
import { useLocation } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import TabNav from "../components/TabNav";
import { Eye } from "lucide-react";

// Sample applications data
const applications = [
  {
    id: "1",
    title: "Analista de dados",
    company: "Tech Innovate",
    status: "approved"
  },
  {
    id: "2",
    title: "Desenvolvedor(a) Front-End",
    company: "Inova Consultoria",
    status: "in-review"
  },
  {
    id: "3",
    title: "Assistente Administrativo",
    company: "Soluções Inclusivas",
    status: "rejected"
  }
];

const ApplicationStatus = () => {
  const location = useLocation();
  
  const tabs = [
    {
      label: "Vagas",
      path: "/jobs",
      isActive: location.pathname === "/jobs",
    },
    {
      label: "Candidaturas",
      path: "/applications",
      isActive: location.pathname === "/applications",
    },
    {
      label: "Notificações",
      path: "/notifications",
      isActive: location.pathname === "/notifications",
    },
  ];
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case "approved":
        return "bg-pcd-primary";
      case "in-review":
        return "bg-pcd-orange";
      case "rejected":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };
  
  const getStatusLabel = (status: string) => {
    switch(status) {
      case "approved":
        return "Aprovado";
      case "in-review":
        return "Em Análise";
      case "rejected":
        return "Recusado";
      default:
        return "Desconhecido";
    }
  };
  
  return (
    <AppLayout showBackButton title="PCDConnect">
      <div className="pb-20">
        <TabNav tabs={tabs} />
        
        <div className="p-4 space-y-4">
          {applications.map((application) => (
            <div key={application.id} className="bg-gray-100 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <div>
                  <h3 className="font-semibold">{application.title}</h3>
                  <p className="text-sm text-gray-600">{application.company}</p>
                </div>
                <button className="text-gray-600">
                  <Eye size={18} />
                </button>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(application.status)} mr-2`}></div>
                <span className="text-sm font-medium">
                  {getStatusLabel(application.status)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default ApplicationStatus;
