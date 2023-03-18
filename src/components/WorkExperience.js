import coverstack from "../images/coverstack.svg"

export default function WorkExperience() {
  return (
    <section id={"work_experience"}
             className={"container mx-auto flex-col items-center justify-center my-2 md:my-10 space-y-4 md:space-y-10 px-2"}>
      <div className={"w-full text-center text-5xl font-serif"}>WORK EXPERIENCE</div>

      <div className={"flex justify-center group"}>
        <div className={"py-2 w-[700] flex "}>
          <div className="ml-1 w-2 flex-shrink-0 bg-neutral-500/25 rounded-t"/>
          <div
            className="-ml-3 mt-8 flex-shrink-0 relative w-4 h-4 rounded-full shadow-lg bg-teal-500/80 group-hover:w-8 transition-[width/50] "/>

          <div className={"mt-5 ml-8 grid gap-4 pb-2"}>
            <div className={"relative w-[200px] h-[40px]"}>
              <img className={"h-full w-full bg-white object-contain rounded-md px-1"} src={coverstack}></img>
            </div>
            <div>
              <h1 className={"text-xl font-semibold"}>Coverstack<span className={"text-lg font-normal"}> ( Sept 22 - Present ) </span>
              </h1>
              <p className={"text-lg font-normal"}>Backend Developer Intern</p>
              <p className={"text-md "}> Bangalore, India</p>
            </div>
            <div className={"ml-4"}>
              <ul className={"list-disc"}>
                <li className={"font-normal text-md"}>
                  Automated master mapping process which was earlier done by a team manually.
                </li>
                <li>
                  Developed Policy Reader to read system-generated pdf file and generate quotation.
                </li>
                <li>
                  Currently working on core project and integration.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={"w-full text-center text-xl font-serif"}>~~~</div>
    </section>
  )
}