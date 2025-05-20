
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import TabNav from "../components/TabNav";
import { Search, Eye } from "lucide-react";

// Sample job data
const jobsData = [
  {
    id: "1",
    title: "Analista de Suporte",
    company: "Campinas",
  },
  {
    id: "2",
    title: "Assistente Administrativo",
    company: "São Paulo",
  },
  {
    id: "3",
    title: "Desenvolvedor(a) Front-End",
    company: "Recife - PE",
  },
];

const Jobs = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  
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
  
  return (
    <AppLayout showBackButton title="PCDConnect">
      <div className="pb-20">
        <TabNav tabs={tabs} />
        
        <div className="p-4">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Buscar vagas"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-100 w-full rounded-full pl-12 pr-4 py-2 text-sm"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Search size={18} className="text-gray-500" />
            </div>
          </div>
          
          <div className="space-y-4">
            {jobsData.map((job) => (
              <div key={job.id} className="bg-gray-100 rounded-lg p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.company}</p>
                  </div>
                  <Link to={`/jobs/${job.id}`} className="text-xs text-gray-600 underline flex items-center">
                    <span>Detalhes</span>
                    <Eye size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Jobs;
