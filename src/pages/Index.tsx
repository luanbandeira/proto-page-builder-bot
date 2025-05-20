
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../components/AppLayout";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Auto navigate to user type selection after a short delay
    const timer = setTimeout(() => {
      navigate("/user-type");
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <AppLayout showNav={false}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-pcd-primary p-4">
        <img src="/pcd-logo.svg" alt="PCDConnect Logo" className="w-32 h-32 mb-6" />
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">PCDConnect</h1>
      </div>
    </AppLayout>
  );
};

export default Index;
