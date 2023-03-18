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
            <div className={"absolute right-6 -top-1 group-hover:block hidden font-semibold text-xl inline-flex"}>{page.name}</div>
            <a href={`#${page.id}`}>
              <div
                className={`rounded-full w-4 h-4 ${props.activePage.includes(page.id) ? "bg-indigo-600" : "bg-gray-400"}`}/>
            </a>
          </div>
        )
      })
      }
    </div>
  )
}