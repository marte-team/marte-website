import { useState } from "react";
import { Router, useRouter } from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";

function AppContent() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const { path } = useRouter();

  const handleOpenConsultation = () => {
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
  };

  const renderCurrentPage = () => {
    switch (path) {
      case "/aboutus":
      case "/about":
        return <AboutPage onOpenConsultation={handleOpenConsultation} />;
      case "/clients":
        return <ClientsPage onOpenConsultation={handleOpenConsultation} />;
      case "/contact":
      case "/contactus":
        return <ContactPage onOpenConsultation={handleOpenConsultation} />;
      default:
        return <HomePage onOpenConsultation={handleOpenConsultation} />;
    }
  };

  return (
    <>
      <Navbar onOpenConsultation={handleOpenConsultation} />
      <main id="main-content">
        {renderCurrentPage()}
      </main>
      <Footer onOpenConsultation={handleOpenConsultation} />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={handleCloseConsultation}
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
