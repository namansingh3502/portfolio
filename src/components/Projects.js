import proj_forum from "../images/proj-forum.webp"
import github from "../images/github.svg"

const PROJECT_CARD = (props) => {
  const data = props.project
  return (
    <li data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">
      <div className="relative h-full group">
        <div
          className="absolute -inset-0.5 rounded-lg blur opacity-75 group-hover:opacity-100 group-hover:-inset-1
              transition-all duration-1000 group-hover:duration-300 animate-tilt bg-gradient-to-tr from-yellow-400 via-gray-50 animation-delay-4000"></div>
        <div
          className="relative flex flex-col rounded-lg shadow-lg h-full overflow-hidden transition-all duration-300">
          <div className="flex-1 bg-gray-900 rounded-md flex flex-col justify-between h-full">
            <div className="flex flex-col text-sm font-medium whitespace-pre-line flex flex-wrap">
              <div className={"h-[200] w-full"}>
                <img className={"h-[200] w-full flex justify-center items-center object-fill "} src={data.image}
                     alt={data.title}></img>
              </div>
              <div className={"w-full p-4 space-y-4"}>

                <div className={"space-y-4"}>
                  <h1
                    className={"mr-3 text-lg font-semibold uppercase text-[#0d9488] group-hover:text-[#14b8a6]"}>
                    {data.title}
                  </h1>
                  <p className={"text-lg font-normal "}>
                    {data.description}
                  </p>
                </div>
                <div className={"w-full"}>
                  <p className={"flex flex-wrap gap-x-2"}>
                    {data.tags.map((tag) => {
                      return (
                        <span className={"font-semibold text-lg text-[#0d9488]"}>#{tag}</span>
                      )
                    })}
                  </p>
                </div>
                <div className={"w-full flex"}>
                  <a href={data.github} aria-label={data.title}>
                    <img className={"h-8 w-8 bg-white rounded-full"} src={github} alt="React Logo"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default function Projects() {

  const PROJECTS = [
    {
      title: "College Forum",
      image: proj_forum,
      description: "College Forum is a social media platform for colleges which provides students, teachers and " +
        "administration with the opportunity to connect together on a single platform.",
      github: "#",
      tags: ["Webdev", "Fullstack", "React", "Django", "TailwindCSS", "AWS"]
    },
    {
      title: "College Forum",
      image: proj_forum,
      description: "College Forum is a social media platform for colleges which provides students, teachers and " +
        "administration with the opportunity to connect together on a single platform.",
      github: "#",
      tags: ["Webdev", "Fullstack", "React", "Django", "TailwindCSS", "AWS"]
    },
    {
      title: "College Forum",
      image: proj_forum,
      description: "College Forum is a social media platform for colleges which provides students, teachers and " +
        "administration with the opportunity to connect together on a single platform.",
      github: "#",
      tags: ["Webdev", "Fullstack", "React", "Django", "TailwindCSS", "AWS"]
    },
    {
      title: "College Forum",
      image: proj_forum,
      description: "College Forum is a social media platform for colleges which provides students, teachers and " +
        "administration with the opportunity to connect together on a single platform.",
      github: "#",
      tags: ["Webdev", "Fullstack", "React", "Django", "TailwindCSS", "AWS"]
    }
  ]

  return (
    <section id={"projects"}
             className={"container mx-auto flex-col items-center justify-center my-2 md:my-10 space-y-4 md:space-y-10 px-2"}>
      <div className={"w-full text-center text-5xl font-serif"}>Projects</div>
      <ul className={"w-full grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4"}>
        {
          PROJECTS.map((project) => {
              return (
                <PROJECT_CARD project={project} key={project.title}/>
              )
            }
          )
        }
      </ul>
      <div className={"w-full text-center text-xl font-serif"}>~~~</div>
    </section>
  )
}