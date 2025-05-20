
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <nav className="bg-white py-3 px-6 fixed bottom-0 left-0 right-0 border-t border-gray-200">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <Link to="/jobs" className={`pcd-nav-button ${currentPath === "/jobs" ? "pcd-nav-button-active" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <span>Vagas</span>
        </Link>
        
        <Link to="/profile" className={`pcd-nav-button ${currentPath === "/profile" ? "pcd-nav-button-active" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1">
            <circle cx="12" cy="8" r="5"></circle>
            <path d="M20 21a8 8 0 1 0-16 0"></path>
          </svg>
          <span>Perfil</span>
        </Link>
        
        <Link to="/applications" className={`pcd-nav-button ${currentPath === "/applications" ? "pcd-nav-button-active" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          <span>Candidaturas</span>
        </Link>
        
        <Link to="/notifications" className={`pcd-nav-button ${currentPath === "/notifications" ? "pcd-nav-button-active" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-1">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
          <span>Notificações</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
