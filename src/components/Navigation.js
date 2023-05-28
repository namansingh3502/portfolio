export default function Navigation(props) {

  const PAGE = [
    {"id": "home", "name": "Home"},
    {"id": "about", "name": "About"},
    {"id": "skills", "name": "Skills"},
    {"id": "work_experience", "name": "Work Experience"},
    {"id": "projects", "name": "Project"}
  ]

  return (
    <div className={"fixed h-full w-10 top-0 right-0 flex flex-col justify-center items-center space-y-3 z-50"}>

      {PAGE.map((page) => {
        return (
          <div className={"group relative"}>
            <div className={"absolute right-6 -top-1 group-hover:block hidden font-semibold text-xl"}>{page.name}</div>
            <a href={`#${page.id}`} aria-label={page.id}>
              <div
                className={`w-1 ${props.activePage.includes(page.id) ? "bg-[#2ec4b6] h-8" : "bg-gray-600 h-4"}`}/>
            </a>
          </div>
        )
      })
      }
    </div>
  )
}