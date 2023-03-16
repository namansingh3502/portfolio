import backpack from "../images/backpack.webp";

const ColTitleTag = (props) => {
  return (
    <div className={"h-24"}>
      <h1
        className={"text-emerald-600 font-semibold font-serif text-4xl text-center"}
        style={{"font-family": "Sriracha", "color": "rgb(46,196,182)"}}>
        {props.data}
      </h1>
    </div>
  )
}

const ColElement = (props) => {
  return (
    <div className={"min-h-32  md:min-h-28 w-full flex px-2 gap-4"}>
      <div className="h-full w-1/5 self-center align-middle text-6xl md:text-7xl flex justify-center">
        {"iconFont" in props.data ?
          <i className={props.data.iconFont}></i>
          : <img src={props.data.icon}/>
        }
      </div>
      <div className={"h-full w-4/5"}>
        <h1 className={"text-2xl"}
            style={{fontFamily: "Sriracha", color: "rgb(46,196,182)"}}>{props.data.title}</h1>
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
        description: "My go to programming language for competitive programming"
      },
      {
        iconFont: "devicon-python-plain colored",
        title: "Python",
        description: "I also like playing with Python for side projects and keen to use this knowledge"
      },
      {
        iconFont: "devicon-javascript-plain colored",
        title: "Javascript",
        description: "Mainly for adding functionality to front-end and ReactJs"
      },
      {
        iconFont: "devicon-html5-plain colored",
        title: "HTML5",
        description: "Mostly writing HTML in JSX, but from time to time I find myself writing a plain, classic HTML file"
      },
      {
        iconFont: "devicon-css3-plain-wordmark colored",
        title: "CSS3",
        description: "Styling of html elements; I usually go for styled-components or Sass or Less"
      }
    ],
    "Libraries & Frameworks": [
      {
        iconFont: "devicon-django-plain-wordmark",
        title: "Django",
        description: "My go to framework of Python when it comes in building any back-end project"
      },
      {
        iconFont: "devicon-react-original colored",
        title: "React",
        description: "My favourite library for building web front-ends and single page apps"
      },
      {
        iconFont: "devicon-gatsby-plain colored",
        title: "GatsbyJS",
        description: "Great framework for building blazing fast websites"
      },
      {
        iconFont: "devicon-graphql-plain colored",
        title: "GraphQl",
        description: "Learning and implementing GraphQL API's for query processing"
      },
      {
        iconFont: "devicon-tailwindcss-plain colored",
        title: "TailwindCSS",
        description: "Styling of html elements."
      }

    ],
    "Tools & Other": [
      {
        iconFont: "devicon-github-original",
        title: "Github",
        description: "Styling of html elements"
      },
      {
        iconFont: "devicon-ubuntu-plain colored",
        title: "Ubuntu",
        description: "Styling of html elements"
      },
      {
        iconFont: "devicon-amazonwebservices-plain-wordmark colored",
        title: "Amazon Web Services",
        description: "I use AWS for hosting my projects."
      }
    ]
  }

  return (
    <section id={"skills"}
             className={"container mx-auto flex-col items-center justify-center my-2 md:my-10 space-y-4 md:space-y-10 px-2"}>
      <div className={"w-full text-center text-5xl font-serif"}>My Backpack</div>
      <div className={"w-full flex justify-center"}>
        <div className={"hidden md:block flex justify-center items-center"}>
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