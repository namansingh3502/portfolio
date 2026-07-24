import SectionTitle from "./SectionTitle";

const coverstackIcon = new URL('../images/coverstack.svg', import.meta.url)
const inkleIcon = new URL('../images/inkle-logo.webp', import.meta.url)
const autodeskIcon = new URL('../images/autodesk-logo.png', import.meta.url)


const experiences = [
  {
    company: "Autodesk",
    location: "Bangalore, India",
    logo: autodeskIcon,
    accent: "bg-violet-500",
    role: { title: "Software Development Engineer", duration: "June 26 - Present" },
  },
  {
    company: "Inkle",
    location: "Bangalore, India",
    logo: inkleIcon,
    accent: "bg-sky-500",
    role: { title: "Software Development Engineer", duration: "Sept 25 - May 26" },
  },
  {
    company: "Coverstack",
    location: "Bangalore, India",
    logo: coverstackIcon,
    accent: "bg-teal-500",
    role: { title: "Software Development Engineer", duration: "June 23 - Sept 25" },
  },
  {
    company: "Coverstack",
    location: "Bangalore, India",
    logo: coverstackIcon,
    accent: "bg-teal-500",
    role: { title: "Backend Developer Intern", duration: "Sept 22 - May 23" },
  },
];

export default function WorkExperience() {
  return (
    <section id={"work_experience"}
             className={"container mx-auto flex-col items-center justify-center my-2 md:my-10 space-y-4 md:space-y-10 px-4"}>
      <SectionTitle title={"My Career"}/>

      <div className={"flex justify-center group"}>
        <div className={"py-2 w-[700] flex "}>
          <div className="ml-1 w-2 flex-shrink-0 bg-neutral-500/25 rounded-t"/>
          <div
            className="-ml-3 mt-8 flex-shrink-0 relative w-4 h-4 rounded-full shadow-lg bg-teal-500/80 group-hover:w-8 transition-[width/50] "/>

          <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <div className={"mt-5 ml-8 grid gap-4 pb-2"} key={i}>
              <div className={"relative w-[200px] h-[40px]"}>
                <img className={"h-full w-full bg-white object-contain rounded-md px-1"} src={exp.logo}
                    alt={"coverstack"}></img>
              </div>
              <div>
                <h1 className={"text-2xl font-semibold"}>{exp.company}</h1>
                <p className={"text-lg"}>{exp.location}</p>
              </div>
              <p className={"text-xl font-semibold"}>
                {exp.role.title} ( {exp.role.duration} )
              </p>

            </div>
          ))} 
          </div>
        </div>
      </div>
      <div className={"w-full text-center text-xl font-serif"}>~~~</div>
    </section>
  )
}