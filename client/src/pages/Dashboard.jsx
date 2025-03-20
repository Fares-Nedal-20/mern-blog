import React from "react";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";

export default function Dashboard() {


  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar section */}
      <div className="md:w-56">
        <DashSidebar />
      </div>
      {/* Profile and ... sections */}
      <div className="flex-1">
        <DashProfile />
      </div>
    </div>
  );
}
