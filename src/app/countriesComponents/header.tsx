"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library} from "@fortawesome/fontawesome-svg-core";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

library.add(faMoon);


function Header() {

  function handleClick() {
    const theme:any = document.querySelector(".theme");
    theme.classList.toggle("dark");
  }

  return (
    <header className="flex justify-between align-middle lg:px-36 mobile:px-4 py-4 bg-white dark:bg-sub-navy dark:text-white header-box-shadow">
      <h1 className="text-2xl" >Where in the world?</h1>
      <div className="flex">
        <img src="" alt="" />
        <button className="text-sm" onClick={handleClick}><FontAwesomeIcon className="pr-2" icon={faMoon} />Dark Mode</button>
      </div>
    </header>
  )
}

export default Header;