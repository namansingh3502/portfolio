import image from '../images/me.jpg';
import twitter_svg from '../images/twitter.svg'
import linkedin_svg from '../images/linkedin.svg'
import instagram_svg from '../images/instagram.svg'
import github_svg from '../images/github.svg'
import gmail_svg from '../images/gmail.svg'

const icons = [

  {
    id: "linkedin",
    icon: linkedin_svg,
    profile: `https://www.linkedin.com/in/namansingh35/`,
  },
  {
    id: "twitter",
    icon: twitter_svg,
    profile: `mailto:namansingh0305@gmail.com`,

  },
  {
    id: "instagram",
    icon: instagram_svg,
    profile: `https://www.instagram.com/naman.singh_35/`,
  },
  {
    id: "github",
    icon: github_svg,
    profile: `https://github.com/namansingh3502/`
  }
]

export default function Home() {
  return (
    <section id={"home"}
             className={"h-screen h-screen container mx-auto min-h-screen flex items-center justify-center"}>
      <div className={"w-full flex items-center justify-center"}>
        <div className={"w-full max-w-7xl grid gap-2 grid-cols-9 lg:grid-cols-10"}>
          <div
            className={"col-span-3 col-start-2 flex justify-center items-center rounded-2xl lg:m-8"}>
            <img
              className={"flex flex-row object-contain mx-3 rounded-2xl border-2 border-amber-400 p-2"}
              src={image}
              alt={"profile photo"}/>
          </div>

          <div className={"h-full col-start-5 col-span-4 lg:col-span-5 flex flex-wrap items-center px-4"}>

            <div className={"flex flex-col gap-2 lg:gap-10 justify-between"}>
              <div
                className={"w-full flex-col leading-normal lg:leading-relaxed font-bold font-serif space-y-4 lg:space-y-8"}>
                <h1 className={"text-4xl lg:text-5xl"}>Hey there, <span className={"wave"}>👋🏻</span> I'm <span
                  className={"bg-clip-text text-transparent bg-gradient-to-r font-extrabold from-pink-600 to-sky-600 selection:text-gray-800"}>Naman Singh</span>
                </h1>
                <p className={"text-lgz lg:text-xl font-normal text-gray-300"}>Software developer based in bangalore. I
                  like to make digital experiences easier and simpler for people. </p>
              </div>
              <div className={"h-20 w-full flex space-x-4"}>
                {icons.map((item) => {
                    return (
                      <a className={"w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center"}
                         href={item.profile} key={item.id}
                      >
                        <div className={"bg-white rounded-full w-10 h-10 lg:h-12 lg:w-12 hover:h-14 hover:w-14"}><img src={item.icon}
                                                                                                      alt="React Logo"/>
                        </div>
                      </a>
                    )
                  }
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className={"text-slate-400 font-semibold absolute bottom-8"}>∿∿∿</div>
    </section>
  )
}