import backpack from "../images/backpack.webp";
import postman from "../images/postman.png"
import SectionTitle from "./SectionTitle";

const ColTitleTag = (props) => {
  return (
    <div className={"h-24"}>
      <h1
        className={"font-normal text-4xl text-center text-[#2ec4b6] font-[Sriracha]"}>
        {props.data}
      </h1>
    </div>
  )
}

const ColElement = (props) => {
  return (
    <div className={"h-28 md:h-36 lg:h-32 xl:h-24 w-full flex px-2 gap-4 space-y-2 leading-6"}>
      <div className="h-full w-1/5 self-center align-middle text-7xl md:text-6xl flex justify-center px-2 py-4">
        {"iconFont" in props.data ?
          <i className={props.data.iconFont}/>
          : <img className={"h-16 w-16"} src={props.data.icon} alt={props.data.title}/>
        }
      </div>
      <div className={"h-full w-4/5"}>
        <h1 className={"text-2xl font-[Sriracha] text-[#0d9488]"}>{props.data.title}</h1>
        <p className={"text-md py-1"}>{props.data.description}</p>
      </div>
    </div>
  )
}

export default function Skills() {

  const ColTitle = ["Language", "Libraries & Frameworks", "Tools & Other"]

  const ColValue = {
    "Language": [
      {
        iconFont: "devicon-cplusplus-plain colored",
        title: "C++",
        description: "My go to programming language for competitive programming."
      },
      {
        iconFont: "devicon-python-plain colored",
        title: "Python",
        description: "I also like playing with Python for side projects and keen to use this knowledge."
      },
      {
        iconFont: "devicon-javascript-plain colored",
        title: "JavaScript",
        description: "Proficient in JavaScript for enhancing front-end functionality."
      },
      {
        iconFont: "devicon-typescript-plain colored",
        title: "TypeScript",
        description: "Leveraging its static typing and scalability to build robust and maintainable applications."
      },
      {
        iconFont: "devicon-html5-plain colored",
        title: "HTML5",
        description: "Mostly writing HTML in JSX, but from time to time I find myself writing a plain, classic HTML file."
      },
      {
        iconFont: "devicon-css3-plain-wordmark colored",
        title: "CSS3",
        description: "Styling of html elements; I usually go for styled-components or Sass or Less."
      }
    ],
    "Libraries & Frameworks": [
      {
        iconFont: "devicon-django-plain-wordmark",
        title: "Django",
        description: "My go to framework of Python when it comes in building any back-end project."
      },
      {
        iconFont: "devicon-react-original colored",
        title: "React",
        description: "My favourite library for building web front-ends and single page apps."
      },
      {
        iconFont: "devicon-gatsby-plain colored",
        title: "GatsbyJS",
        description: "Great framework for building blazing fast websites."
      },
      {
        iconFont: "devicon-graphql-plain colored",
        title: "GraphQl",
        description: "Learning and implementing GraphQL API's for query processing."
      },
      {
        iconFont: "devicon-tailwindcss-plain colored",
        title: "TailwindCSS",
        description: "Utilizing to rapidly create responsive, sleek, and highly customizable user interfaces."
      },
      {
        iconFont: "devicon-pandas-original-wordmark",
        title: "Pandas",
        description: "For automating data processing tasks, streamlining workflows, and driving efficient data-driven automation."
      }

    ],
    "Tools & Other": [
      {
        iconFont: "devicon-github-original",
        title: "Github",
        description: "Leveraging its version control and software development workflows."
      },
      {
        iconFont: "devicon-ubuntu-plain colored",
        title: "Ubuntu",
        description: "My favourite Operating System for efficient development environments."
      },
      {
        iconFont: "devicon-amazonwebservices-plain-wordmark colored",
        title: "Amazon Web Services",
        description: "Use AWS for project hosting, ensuring reliable and scalable solutions."
      },
      {
        iconFont: "devicon-jupyter-plain-wordmark colored",
        title: "Jupyter Notebook",
        description: "Facilitating interactive and collaborative data analysis workflows."
      },
      {
        icon: postman,
        title: "Postman",
        description: "Simplifying API development and testing processes efficiently."
      }
    ]
  }

  return (
    <section id={"skills"}
             className={"container mx-auto flex-col items-center justify-center my-2 md:my-10 space-y-4 md:space-y-10 px-6"}>
      <SectionTitle title={"My Backpack"}/>
      <div className={"w-full flex justify-center"}>
        <div className={"hidden md:flex justify-center items-center"}>
          <img
            className={"flex flex-row object-contain m-4 lg:my-0 h-44"}
            src={backpack}
            alt={"backpack"}
          />
        </div>
      </div>
      <div className={"w-full flex flex-wrap md:flex-nowrap justify-center gap-2 space-y-6 md:space-y-0 px-2 md:px-0"}>
        {ColTitle.map((title) => {
            return (
              <div className={"w-full md:w-1/3 space-y-6 md:space-y-0"} key={title}>
                <ColTitleTag data={title}/>
                <div className={"w-full flex flex-col gap-3"}>
                  {ColValue[title].map((item) => {
                    return (
                      <ColElement data={item} key={item.title}/>
                    )
                  })}
                </div>
              </div>
            )
          }
        )}
      </div>

      <div className={"w-full text-center text-xl font-serif"}>~~~</div>
    </section>
  )
}