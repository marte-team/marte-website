import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import About from "./components/About";
import Clients from "./components/Clients";
import LeadCTA from "./components/LeadCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Problems />
        <WhyUs />
        <Services />
        <Expertise />
        <About />
        <Clients />
        <LeadCTA />
      </main>

      <Footer />
    </>
  );
}

export default App;