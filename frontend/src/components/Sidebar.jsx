import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/admin_dashboard" },
    { name: "Actuarial Data", path: "/admin_acturial" },
    { name: "Policy Analysis", path: "/admin_policy_analysis" },
    { name: "Policy Summary", path: "/admin_policy_summary" },
    { name: "Escalations", path: "/admin_escalations" },
  ];

  const handleLogout = () => {
    // example: clear auth token and navigate to login page
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex flex-col w-72 bg-purple-700 text-white h-screen shadow-2xl">
      {/* Logo */}
      <div className="flex items-center p-5 space-x-2 border-b border-purple-600">
        <span className="text-2xl font-extrabold text-pink-300">S</span>
        <span className="text-xl font-semibold">SaralBima</span>
      </div>

      {/* Navigation */}
      <nav className="flex-grow pt-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="my-1">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  // 💡 INCREASED FONT SIZE from text-sm to text-base
                  `flex items-center px-5 py-3 text-base font-medium transition-all duration-200 rounded-l-lg ${
                    isActive
                      ? "bg-purple-800 border-l-4 border-white text-white"
                      : "text-purple-100 hover:bg-purple-600 hover:text-white"
                  }`
                }
              >
                <span className="mr-3"></span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 mt-auto">
        <button
          onClick={handleLogout}
          // 💡 INCREASED FONT SIZE from text-sm to text-base
          className="flex justify-center items-center w-full py-2 bg-purple-500 hover:bg-purple-400 rounded-lg text-base text-white font-semibold transition-colors duration-200"
        >
          <span className="mr-2">➡️</span> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;