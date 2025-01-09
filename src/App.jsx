import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Competence from "./pages/Competence";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Project from "./pages/Project";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Profil />
      <Competence />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
