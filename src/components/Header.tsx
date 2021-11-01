import { MenuIcon } from "@heroicons/react/solid";
import { sidebarState } from "../recoilStates";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router";

const Header = () => {
  const [sidebar, setSidebar] = useRecoilState(sidebarState);

  let history = useHistory();

  return (
    <div
      id="Header"
      className="w-full h-16 bg-transparent flex justify-between px-4 items-center text-logo-dark dark:text-logo-white"
    >
      <button
        id="Header.menu-button"
        className="p-2 rounded border border-transparent hover:bg-gray-800 focus:outline-none focus:border-gray-500"
        onClick={() => setSidebar(!sidebar)}
      >
        <p className="sr-only">Open Sidebar</p>
        <MenuIcon className="w-6 h-6" />
      </button>
      <div id="Header.title" className="flex items-center">
        {/* <h1 className="font-logo text-logo">Busch &amp; Busch</h1> */}
        <img
          src="Busch_und_Busch_Logo_Gold_big-text.png"
          alt="logo"
          className="h-16 cursor-pointer"
          onClick={() => history.push("/")}
        />
      </div>
      <div id="Header.ghost" className="p-2">
        <MenuIcon className="text-transparent w-6 h-6" />
      </div>
    </div>
  );
};

export default Header;
