
import { useState } from "react";
import AppLayout from "../components/AppLayout";
import { Eye } from "lucide-react";

const Profile = () => {
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    screenReader: true,
    darkMode: false,
    highContrast: true,
    virtualLibras: true,
    largerFont: true
  });
  
  const toggleSetting = (setting: keyof typeof accessibilitySettings) => {
    setAccessibilitySettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };
  
  return (
    <AppLayout title="Meu Perfil">
      <div className="p-4 pb-24 bg-orange-50">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-pcd-light-green rounded-full flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pcd-primary">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Pedro</h2>
            </div>
          </div>
          <button>
            <Eye size={24} className="text-gray-700" />
          </button>
        </div>
        
        <div className="mb-6">
          <h3 className="text-gray-700 mb-2">E-mail</h3>
          <p className="mb-4">pedro@exemplo.com</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-4 flex items-center">
            Preferências de Acessibilidade
            <button className="ml-2">
              <Eye size={18} className="text-gray-700" />
            </button>
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="font-medium">Ativar Leitor de tela</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={accessibilitySettings.screenReader}
                  onChange={() => toggleSetting('screenReader')}
                  className="sr-only peer" 
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pcd-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="font-medium">Modo Escuro</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={accessibilitySettings.darkMode}
                  onChange={() => toggleSetting('darkMode')}
                  className="sr-only peer" 
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pcd-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="font-medium">Contraste Alto</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={accessibilitySettings.highContrast}
                  onChange={() => toggleSetting('highContrast')}
                  className="sr-only peer" 
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pcd-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="font-medium">Ativar Libras Virtuais</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={accessibilitySettings.virtualLibras}
                  onChange={() => toggleSetting('virtualLibras')}
                  className="sr-only peer" 
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pcd-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between py-2">
              <span className="font-medium">Aumenta Fonte por Padrão</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={accessibilitySettings.largerFont}
                  onChange={() => toggleSetting('largerFont')}
                  className="sr-only peer" 
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pcd-primary"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
