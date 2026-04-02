import { useState } from "react";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/sections/HomePage";
import CoursesPage from "@/components/sections/CoursesPage";
import ProfilePage from "@/components/sections/ProfilePage";
import ProgressPage from "@/components/sections/ProgressPage";
import CommunityPage from "@/components/sections/CommunityPage";
import CertificatesPage from "@/components/sections/CertificatesPage";
import SupportPage from "@/components/sections/SupportPage";

export type Section = "home" | "courses" | "profile" | "progress" | "community" | "certificates" | "support";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home": return <HomePage onNavigate={setActiveSection} />;
      case "courses": return <CoursesPage />;
      case "profile": return <ProfilePage onNavigate={setActiveSection} />;
      case "progress": return <ProgressPage />;
      case "community": return <CommunityPage />;
      case "certificates": return <CertificatesPage />;
      case "support": return <SupportPage />;
      default: return <HomePage onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-background mesh-bg">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-[100px] animate-float" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-pink-500/6 blur-[80px] animate-float-slow" style={{animationDelay: '3s'}} />
      </div>

      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />

      <main className="pt-20">
        {renderSection()}
      </main>
    </div>
  );
}
