import image from '../images/me.jpg';
import twitter_svg from '../images/twitter.svg'
import linkedin_svg from '../images/linkedin.svg'
import instagram_svg from '../images/instagram.svg'
import github_svg from '../images/github.svg'

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
             className={"h-screen min-h-screen container mx-auto flex items-center justify-center relative"}>
      <div className={"w-full flex items-center justify-center"}>
        <div className={"w-full max-w-7xl grid grid-cols-9 gap-2 px-2 md:px-6"}>
          <div className={"col-start-1 col-span-9 md:col-span-3 flex justify-center items-center rounded-2xl lg:px-2"}>
            <img
              className={"flex flex-row object-contain m-4 lg:my-0 rounded-2xl border-2 border-amber-400 p-2"}
              src={image}
              alt={"profile photo"}
              style={{"max-height": "350px"}}
            />
          </div>

          <div className={"h-full sm:col-start-2 md:col-start-4 col-span-9 sm:col-span-7 md:col-span-6 lg:col-span-6 flex flex-wrap items-center px-4 lg:px-2"}>

            <div className={"flex flex-col gap-2 justify-between items-center md:items-start space-y-4"}>
              <div
                className={"w-full flex-col leading-normal lg:leading-relaxed font-bold font-serif space-y-6 lg:space-y-8"}>
                <h1 className={"text-4xl lg:text-5xl"}>Hey there, <span className={"wave"}>👋🏻</span> I'm <span
                  className={"bg-clip-text text-transparent bg-gradient-to-r font-extrabold from-pink-600 to-sky-600 selection:text-gray-800"}>Naman Singh</span>
                </h1>
                <p className={"text-lgz lg:text-xl font-normal text-gray-300"}>Software developer based in bangalore. I
                  like to make digital experiences easier and simpler for people. </p>
              </div>
              <div className={"h-20 w-full flex items-center justify-center md:justify-start space-x-4"}>
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
      <div className={"text-white text-xl font-sans absolute bottom-6"}>~~~</div>
    </section>
  )
}