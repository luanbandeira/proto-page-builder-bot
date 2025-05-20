
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../components/AppLayout";

const SuccessPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Auto redirect after delay
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <AppLayout showNav={false}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-pcd-primary p-6 text-white">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Informações salvas com sucesso!
          </h2>
          
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-pcd-primary">
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SuccessPage;
