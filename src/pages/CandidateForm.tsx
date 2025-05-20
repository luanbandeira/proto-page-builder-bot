
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../components/AppLayout";

const CandidateForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    gender: "",
    disability: "",
    city: "",
    state: "",
    workArea: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/success");
  };
  
  return (
    <AppLayout showNav={false} showBackButton title="Acessibilidade">
      <div className="p-4 pb-20">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Nome completo
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="pcd-input"
              required
            />
          </div>
          
          <div>
            <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">
              Data de nascimento
            </label>
            <input
              type="text"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              placeholder="DD/MM/AAAA"
              className="pcd-input"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gênero
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input 
                  type="radio" 
                  name="gender" 
                  value="masculino" 
                  onChange={handleChange}
                  className="h-4 w-4 text-pcd-primary"
                />
                <span className="ml-2 text-sm text-gray-700">Masculino</span>
              </label>
              
              <label className="inline-flex items-center">
                <input 
                  type="radio" 
                  name="gender" 
                  value="feminino" 
                  onChange={handleChange}
                  className="h-4 w-4 text-pcd-primary" 
                />
                <span className="ml-2 text-sm text-gray-700">Feminino</span>
              </label>
              
              <label className="inline-flex items-center">
                <input 
                  type="radio" 
                  name="gender" 
                  value="outro" 
                  onChange={handleChange}
                  className="h-4 w-4 text-pcd-primary" 
                />
                <span className="ml-2 text-sm text-gray-700">Outro</span>
              </label>
            </div>
          </div>
          
          <div>
            <label htmlFor="disability" className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de deficiência
            </label>
            <input
              type="text"
              id="disability"
              name="disability"
              value={formData.disability}
              onChange={handleChange}
              placeholder="Deficiência auditiva"
              className="pcd-input"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                Localização
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Cidade"
                className="pcd-input"
              />
            </div>
            
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                Estado
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="pcd-input"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="workArea" className="block text-sm font-medium text-gray-700 mb-1">
              Área de interesse de trabalho
            </label>
            <input
              type="text"
              id="workArea"
              name="workArea"
              value={formData.workArea}
              onChange={handleChange}
              className="pcd-input"
            />
          </div>
          
          <div className="pt-4">
            <button type="submit" className="pcd-button-primary w-full">
              Continuar
            </button>
          </div>
        </form>
        
        <div className="fixed bottom-0 left-0 right-0 bg-white py-4 flex justify-center space-x-20">
          <button onClick={() => navigate("/login")} className="flex flex-col items-center text-gray-400">
            <div className="w-3 h-3 rounded-full bg-gray-200 mb-1"></div>
            <span>Login</span>
          </button>
          
          <div className="flex flex-col items-center text-pcd-primary font-medium">
            <div className="w-3 h-3 rounded-full bg-pcd-primary mb-1"></div>
            <span>Cadastrar-se</span>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default CandidateForm;
