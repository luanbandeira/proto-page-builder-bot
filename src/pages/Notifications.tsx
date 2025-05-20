
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import TabNav from "../components/TabNav";
import { Eye } from "lucide-react";

// Sample notifications data
const notificationsData = [
  {
    id: "1",
    type: "message",
    title: "Mensagem da empresa",
    subtitle: "Você tem uma nova mensagem",
    read: false
  },
  {
    id: "2",
    type: "job",
    title: "Nova vaga compatível",
    subtitle: "Desenvolvedor front-end",
    read: false
  },
  {
    id: "3",
    type: "application",
    title: "Atualização da candidatura",
    subtitle: "Analista de suporte",
    read: false
  },
];

const Notifications = () => {
  const location = useLocation();
  const [notifications, setNotifications] = useState(notificationsData);
  const [showUnreadOnly, setShowUnreadOnly] = useState(true);
  
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
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };
  
  const getIconForType = (type: string) => {
    switch (type) {
      case "message":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        );
      case "job":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="4"></circle>
          </svg>
        );
      case "application":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
        );
      default:
        return null;
    }
  };
  
  const visibleNotifications = showUnreadOnly 
    ? notifications.filter(n => !n.read) 
    : notifications;
  
  return (
    <AppLayout showBackButton title="PCDConnect">
      <div className="pb-20">
        <TabNav tabs={tabs} />
        
        <div className="p-4 space-y-4">
          {visibleNotifications.map((notification) => (
            <div key={notification.id} className="bg-pcd-light-blue rounded-lg p-4">
              <div className="flex">
                <div className="mr-3">
                  {getIconForType(notification.type)}
                </div>
                <div>
                  <h3 className="font-medium">{notification.title}</h3>
                  <p className="text-sm text-gray-600">{notification.subtitle}</p>
                </div>
                <div className="ml-auto">
                  <button className="text-gray-600">
                    <Eye size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Divider */}
          {!showUnreadOnly && (
            <>
              <div className="text-center text-gray-400 my-4">
                Mensagens lidas
              </div>
              
              {notifications.filter(n => n.read).map((notification) => (
                <div key={notification.id} className="bg-gray-100 rounded-lg p-4 opacity-70">
                  <div className="flex">
                    <div className="mr-3">
                      {getIconForType(notification.type)}
                    </div>
                    <div>
                      <h3 className="font-medium">{notification.title}</h3>
                      <p className="text-sm text-gray-600">{notification.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
          
          {visibleNotifications.length > 0 && (
            <button 
              onClick={markAllAsRead}
              className="pcd-button-primary w-full mt-4"
            >
              Marcar como lidas
            </button>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Notifications;
