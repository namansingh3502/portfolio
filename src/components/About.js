import clipart from "./../images/clipart.webp"

export default function About() {

  return (
    <section id={"about"}
             className={"container mx-auto flex-col items-center justify-center my-2 md:my-10 space-y-4 md:space-y-10 px-2"}>
      <div className={"w-full text-center text-5xl font-serif"}>About me</div>
      <div className={"w-full flex justify-center items-center pb-6 md:py-10"}>
        <div className={"hidden lg:block lg:w-1/3 flex justify-center items-center"}>
          <img
            className={"flex flex-row object-contain m-4 lg:my-0 p-2"}
            src={clipart}
            alt={"clipart"}
            style={{"max-height": "350px"}}
          />
        </div>
        <div className={"w-full lg:w-2/3 text-lg lg:text-xl px-6 space-y-6"}>
          <p>
            Hey! My name is <span className={"text-emerald-600 font-semibold"}>Naman Singh</span>.
            Currently I am in my final year at
            <span className={"text-emerald-600 font-semibold"}>SJB Institute of Technology, Bangalore</span>
            pursuing my Bachelor's in
            <span className={"text-emerald-600 font-semibold"}>Computer Science and Engineering</span>.
          </p>
          <p>
            I'm working as a <span className={"text-emerald-600 font-semibold"}>Backend Developer Intern</span> at
            <a className={"text-emerald-600 font-semibold"} href={'https://www.coverstack.in/'}>CoverStack</a>.
            I am working in the Term team and building the term product.
          </p>
          <p>
            I got into development because computers have always fascinated me. Seeing code getting converted to things
            to do complex tasks like games, applications, was no less than magic to me and that's where my quest of
            learning and building began.
          </p>
          <p>
            In my free time, I like to watch web series, listen to music (and very early stage of learning guitar),
            read and explore new stuff in tech and try out new technologies to build fun side projects, and spend time
            with friends and family.
          </p>
          <p>
            I created this website so I could showcase all this and through this process, make it easier for you to
            connect with me. If you like what you see, head over to the
            <a className={"text-emerald-600 font-semibold"} href={""}><span>contact section</span></a>
            below and send me a text. I would love to hear from you!.
          </p>
        </div>
      </div>
      <div className={"w-full text-center text-xl font-serif"}>~~~</div>
    </section>
  )
}