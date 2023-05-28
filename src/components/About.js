import clipart from "./../images/clipart.webp"
import SectionTitle from "./SectionTitle";

const SPL_TEXT = (props) => {
  return (
    <span className={"font-semibold font-serif text-md xl:text-lg text-[#0d9488]"}> {props.text} </span>
  )
}
export default function About() {

  return (
    <section
      id={"about"}
      className={"container mx-auto flex-col items-center justify-center my-2 xl:my-10 space-y-4 xl:space-y-10 px-2 scroll-mt-24"}
    >
      <SectionTitle title={"About Me"}/>
      <div className={"w-full flex justify-center items-center text-justify xl:py-6"}>
        <div className={"w-full hidden lg:block lg:w-2/5 items-center justify-center"}>
          <img
            className={"w-full xl:px-16 flex justify-center items-center object-contain"}
            src={clipart}
            alt={"clipart"}
          />
        </div>
        <div className={"w-full lg:w-3/5 text-md xl:text-lg px-6 space-y-6 font-normal"}>
          <p>
            Greetings! My name is <SPL_TEXT text={"Naman Singh,"}/> a recent graduate from
            <SPL_TEXT text={"SJB Institute of Technology, Bangalore"}/> where I completed my Bachelor's in
            <SPL_TEXT text={"Computer Science and Engineering."}/>
          </p>
          <p>
            Currently I'm working as a <SPL_TEXT text={"Software Development "}/> at
            <a href={'https://www.coverstack.in/'}><SPL_TEXT text={"CoverStack."}/></a>
            I am working in the Term team and building the term product.
          </p>
          <p>
            My <SPL_TEXT text={"fascination with computers"}/> has been the driving force behind my pursuit of a career
            in development. Witnessing the magical transformation of code into functional entities capable of performing
            complex tasks, such as creating captivating games and applications, has captivated me from the beginning.
            This curiosity ignited a constant <SPL_TEXT text={"quest for learning and building."}/>
          </p>
          <p>
            In my leisure time, I find solace in indulging in various activities. I enjoy watching web series,
            listening to music (and I'm currently in the early stages of learning to play the guitar),
            exploring the realm of literature, and keeping myself updated with the <SPL_TEXT
            text={"latest technological advancements."}/> By trying out new technologies, I engage in building exciting
            side projects. Furthermore, spending quality time with my loved ones, be it friends or family, is something
            I cherish dearly.
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