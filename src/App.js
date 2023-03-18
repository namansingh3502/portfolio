import {createRoot} from "react-dom/client";
import Navigation from "./components/Navigation";
import useScrollspy from "./components/Scrollspy";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";

const App = () => {
  const activeId = useScrollspy(["home"]);

  return (
    <div className={"text-white min-h-screen"}>
      {window.innerWidth > 650 ? <Navigation activePage={activeId}/> : null}
      <Home/>
      <About/>
      <Skills/>
      <WorkExperience/>
      <Projects/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);