
import { Link } from "react-router-dom";

type Tab = {
  label: string;
  path: string;
  isActive: boolean;
};

type TabNavProps = {
  tabs: Tab[];
};

const TabNav = ({ tabs }: TabNavProps) => {
  return (
    <div className="flex border-b border-gray-200">
      {tabs.map((tab) => (
        <Link
          key={tab.path}
          to={tab.path}
          className={`pcd-tab ${tab.isActive ? "pcd-tab-active" : ""}`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};

export default TabNav;
