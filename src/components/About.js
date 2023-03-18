import clipart from "./../images/clipart.webp"

const SPL_TEXT = (props) => {
  return (
    <span className={"font-semibold font-serif text-lg lg:text-xl text-[#2ec4b6]"}> {props.text} </span>
  )
}
export default function About() {

  return (
    <section id={"about"}
             className={"container mx-auto flex-col items-center justify-center my-2 md:my-10 space-y-4 md:space-y-10 px-2"}>
      <div className={"w-full text-center text-5xl font-serif"}>About me</div>
      <div className={"w-full flex justify-center items-center pb-6 md:py-10"}>
        <div className={"w-full hidden lg:block lg:w-2/5 flex items-center justify-center"}>
          <img
            className={"w-full xl:px-16 flex justify-center items-center object-contain"}
            src={clipart}
            alt={"clipart"}
          />
        </div>
        <div className={"w-full lg:w-3/5 text-md lg:text-xl px-6 space-y-6 font-light"}>
          <p>
            Hey! My name is <SPL_TEXT text={"Naman Singh,"}/> Currently I am in my final year at
            <SPL_TEXT text={"SJB Institute of Technology, Bangalore"}/> pursuing my Bachelor's in
            <SPL_TEXT text={"Computer Science and Engineering."}/>
          </p>
          <p>
            I'm working as a <SPL_TEXT text={"Backend Developer Intern"}/> at
            <a href={'https://www.coverstack.in/'}><SPL_TEXT text={"CoverStack."}/></a>
            I am working in the Term team and building the term product.
          </p>
          <p>
            I got into development because
            <SPL_TEXT text={"computers have always fascinated me."}/>
            Seeing code getting converted to things to do complex tasks like games, applications, was no less than
            magic to me and that's where my
            <SPL_TEXT text={"quest of learning and building began."}/>
          </p>
          <p>
            In my free time, I like to watch web series, listen to music (and very early stage of learning guitar),
            <SPL_TEXT text={"read and explore new stuff in tech"}/> and try out new technologies to build fun side
            projects, and spend time with friends and family.
          </p>
          <p>
            I created this website so I could showcase all this and through this process, make it easier for you to
            connect with me. If you like what you see, head over to the
            <a className={"text-emerald-600 font-semibold"} href={"#"}><SPL_TEXT text={"contact section"}/></a>
            below and send me a text. I would love to hear from you!.
          </p>
        </div>
      </div>
      <div className={"w-full text-center text-xl font-serif"}>~~~</div>
    </section>
  )
}