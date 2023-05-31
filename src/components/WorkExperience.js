import coverstack from "../images/coverstack.svg"
import SectionTitle from "./SectionTitle";

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

          <div className={"mt-5 ml-8 grid gap-4 pb-2"}>
            <div className={"relative w-[200px] h-[40px]"}>
              <img className={"h-full w-full bg-white object-contain rounded-md px-1"} src={coverstack}
                   alt={"coverstack"}></img>
            </div>
            <div>
              <h1 className={"text-2xl font-semibold"}>Coverstack</h1>
              <p className={"text-lg"}> Bangalore, India</p>
            </div>
            <p className={"text-xl font-semibold"}>
              Backend Developer Intern ( Sept 22 - May 23 )
            </p>
            <div className={"ml-6"}>
              <ul className={"list-disc"}>
                <li className={"font-normal text-md"}>
                  Automated the master mapping process, eliminating the need for manual work by the team and reducing
                  errors by 20%.
                </li>
                <li>
                  Developed and implemented a Policy Reader tool that streamlined the process of reading
                  system-generated
                  PDF files and generating quotations, reducing processing time by 60%.
                </li>
              </ul>
            </div>
            <p className={"text-xl font-semibold"}>
              Software Development Engineer ( June 23 - Present )
            </p>
            <div className={"ml-6"}>
              <ul className={"list-disc"}>
                <li>
                  Did multiple integration for various insurers.
                </li>
              </ul>
            </div>
            <div className={""}>
              <p className={"flex flex-wrap gap-x-3"}>
                {
                  ["Django", "React", "Python", "Jupyter Notebook", "Backend"].map((tag) => {
                    return (
                      <span className={"font-semibold text-lg text-[#0d9488]"}>#{tag}</span>
                    )
                  })}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={"w-full text-center text-xl font-serif"}>~~~</div>
    </section>
  )
}