import logo from "../images/logo.png"

export default function Header() {

  const LINKS = [
    {"title": "Home", "id": "#home"},
    {"title": "About", "id": "#about"},
    {"title": "Blogs", "id": "#"},
    {"title": "Backpack", "id": "#skills"},
  ]

  return (
    <div
      className={
        `h-20 fixed top-0 left-0 right-0 z-10 transform transition backdrop-filter bg-gray-900 ${
          window.scrollY > 10 ? "bg-opacity-60 backdrop-blur-md backdrop-saturate-150 border-gray-400 border-b-[1px]" : ""}`
      }
    >
      < header className="h-20 flex items-center max-w-7xl mx-auto justify-between px-8">
        <div className="h-20 flex items-center">
          <a className="" aria-label="Naman Singh" href="/">
            <img className={"h-14 w-14"} src={logo} aria-label={"logo"} alt={"logo"}/>
          </a>
        </div>
        <div className="h-20 hidden md:flex items-center justify-center px-2">
          {LINKS.map((item) => {
            return (
              <a
                className="h-12 w-24 m-1 flex items-center justify-center"
                href={item.id}
                key={item.id}
                aria-label={item.title}
              >
                <div
                  className={"h-12 px-4 flex justify-center items-center tracking-wide text-lg font-semibold font-[Sriracha] text-gray-100 hover:text-[#2ec4b6] hover:border-[3px] hover:border-[#2ec4b6] rounded-lg"}>
                  {item.title}
                </div>
              </a>
            )
          })}
        </div>
      </header>
    </div>
  )
}