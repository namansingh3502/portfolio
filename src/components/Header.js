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
        window.scrollY > 10 ?
          "fixed top-0 left-0 right-0 z-10 transform transition pt-4 border-gray-800 backdrop-filter bg-gray-900 " +
          "bg-opacity-80 border-b -translate-y-4 backdrop-blur-md backdrop-saturate-150"
          :
          ""
      }
    >
      <header className="flex items-center max-w-7xl mx-auto justify-between py-4 px-6">
        <div><a className="" aria-label="Naman Singh" href="/">
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <img className={"h-12 w-12"} src={logo} aria-label={"logo"}/>
            </div>
          </div>
        </a></div>
        <div className="flex items-center gap-3 text-LG leading-5">
          <div className="hidden sm:flex sm:gap-3">
            {LINKS.map((item) => {
              return (
                <a
                  className="px-4 py-2 font-medium text-gray-100 hover:bg-white hover:bg-gray-700 rounded-md transition-colors duration-300"
                  href={item.id}
                >
                  {item.title}
                </a>
              )
            })}
          </div>
        </div>
      </header>
    </div>
  )
}