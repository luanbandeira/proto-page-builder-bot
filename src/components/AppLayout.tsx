
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

type AppLayoutProps = {
  children: ReactNode;
  showNav?: boolean;
  title?: string;
  showBackButton?: boolean;
};

const AppLayout = ({ 
  children, 
  showNav = true, 
  title,
  showBackButton = false
}: AppLayoutProps) => {
  const location = useLocation();
  
  // Don't render navbar on some pages
  const hideNavPages = ["/", "/login", "/register", "/user-type"];
  const shouldHideNav = hideNavPages.includes(location.pathname);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {title && (
        <header className="bg-white p-4 flex items-center">
          {showBackButton && (
            <button 
              onClick={() => window.history.back()} 
              className="mr-4 text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-800">
                <path d="M19 12H5"></path>
                <path d="M12 19l-7-7 7-7"></path>
              </svg>
            </button>
          )}
          <h1 className="text-xl font-semibold text-teal-800">{title}</h1>
        </header>
      )}
      
      <main className="flex-1">
        {children}
      </main>
      
      {showNav && !shouldHideNav && <NavBar />}
    </div>
  );
};

export default AppLayout;
