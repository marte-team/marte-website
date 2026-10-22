import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Lifecycle from "./components/Lifecycle";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Clients from "./components/Clients";
import About from "./components/About";
import HealthCheck from "./components/HealthCheck";
import LeadCTA from "./components/LeadCTA";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";

function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
  };

  return (
    <>
      <Navbar onOpenConsultation={handleOpenConsultation} />
      <main>
        <Hero onOpenConsultation={handleOpenConsultation} />
        <Problems />
        <Lifecycle />
        <WhyUs />
        <Services onOpenConsultation={handleOpenConsultation} />
        <Expertise />
        <Clients />
        <About />
        <HealthCheck onOpenConsultation={handleOpenConsultation} />
        <LeadCTA />
      </main>
      <Footer onOpenConsultation={handleOpenConsultation} />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={handleCloseConsultation}
      />
    </>
  );
}

export default App;
