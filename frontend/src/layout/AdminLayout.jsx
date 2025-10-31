import React from 'react';
import Sidebar from '../components/Sidebar'; 

const AdminLayout = ({ children }) => {
  return (
    // Full height and width layout — fills the entire screen
    <div className="flex h-screen w-screen bg-gray-50 overflow-hidden">
      <Sidebar />

      {/* Main content area covers remaining space and scrolls only inside */}
      <main className="flex-grow h-full overflow-y-auto">
        {/* Full height and no unwanted padding — the inner content handles spacing */}
        <div className="h-full w-full p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
