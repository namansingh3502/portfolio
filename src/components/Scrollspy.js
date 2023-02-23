import {useLayoutEffect, useState} from "react";

const useScrollspy = () => {
  const [activeId, setActiveId] = useState(["home"]);

  useLayoutEffect(() => {
    const listener = () => {
      const PageID = ["home", "about", "skills", "projects"]
      const page_height = window.innerHeight
      let active_page = []

      for (let i = 0; i < PageID.length; i++) {

        const element = document.getElementById(PageID[i]).getBoundingClientRect()
        const top = element.top
        const bottom = element.bottom

        if( top >= 0 && top < page_height * 0.8 ){
          active_page.push(PageID[i])
        }
        if( bottom >= page_height * 0.2 && bottom < page_height ){
          active_page.push(PageID[i])
        }

      }
      setActiveId( active_page );
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return activeId;
};

export default useScrollspy;