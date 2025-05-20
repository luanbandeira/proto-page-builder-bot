
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold mb-4 text-pcd-primary">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Página não encontrada</p>
        <img src="/pcd-logo.svg" alt="PCDConnect Logo" className="w-24 h-24 mx-auto mb-6" />
        <Link to="/" className="pcd-button-primary inline-block">
          Voltar ao início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
