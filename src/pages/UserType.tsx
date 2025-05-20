
import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";

const UserType = () => {
  return (
    <AppLayout showNav={false}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-pcd-primary p-6">
        <div className="w-full max-w-md space-y-6">
          <Link 
            to="/register?type=candidate" 
            className="block bg-white p-6 rounded-xl flex flex-col items-center justify-center transition-all shadow-md hover:shadow-lg"
          >
            <div className="flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pcd-primary">
                <circle cx="12" cy="8" r="5"></circle>
                <path d="M20 21a8 8 0 1 0-16 0"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 text-gray-400">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </div>
            <span className="text-xl font-medium text-pcd-primary">Sou candidato</span>
          </Link>
          
          <Link
            to="/register?type=company"
            className="block bg-white p-6 rounded-xl flex flex-col items-center justify-center transition-all shadow-md hover:shadow-lg"
          >
            <div className="flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pcd-primary">
                <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                <path d="M2 20h20"></path>
                <path d="M14 8v2"></path>
                <path d="M10 8v2"></path>
                <path d="M10 14v2"></path>
                <path d="M14 14v2"></path>
                <path d="M12 4v2"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 text-pcd-primary">
                <path d="M12 5v14"></path>
                <path d="M5 12h14"></path>
              </svg>
            </div>
            <span className="text-xl font-medium text-pcd-primary">Sou empresa</span>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default UserType;
