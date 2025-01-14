import { Element } from "react-scroll";
import Header from "./components/header/Header";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Project from "./pages/project/Project";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Element name="home">
          <Home />
        </Element>

        <Element name="profile">
          <Profile />
        </Element>

        <Element name="project">
          <Project />
        </Element>

        <Element name="contact">
          <Contact />
        </Element>
      </main>

      <Footer />
    </>
  );
}
