import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
// import { ChatGPT } from "./components/ChatGPT";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Skills />
      {/* <ChatGPT /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
