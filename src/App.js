import {createRoot} from "react-dom/client";
import Navigation from "./components/Navigation";
import useScrollspy from "./components/Scrollspy";

const App = () => {
  const activeId = useScrollspy(["home"]);

  return (
    <div className={"text-white min-h-screen relative"}>
      <Navigation activePage={activeId}/>

      <section id={"home"} className={"min-h-screen"}>
        Home
      </section>
      <section id={"about"} className={"min-h-screen"}>
        About
      </section>
      <section id={"skills"} className={"min-h-screen"}>
        Skills
      </section>
      <section id={"projects"} className={"min-h-screen"}>
        Projects
      </section>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);