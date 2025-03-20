import React from "react";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";

export default function Dashboard() {


  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar section */}
      <div className="w-full md:w-56">
        <DashSidebar />
      </div>
      {/* Profile and ... sections */}
      <div>
        <DashProfile />
      </div>
    </div>
  );
}
