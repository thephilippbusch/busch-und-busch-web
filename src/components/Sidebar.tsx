import {
  XIcon,
  HomeIcon,
  LibraryIcon,
  UserGroupIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/solid";
import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { sidebarState, themeState } from "../recoilStates";

export type navitem = {
  id: number;
  label: string;
  path: string;
  icon: JSX.Element;
};

const items: navitem[] = [
  {
    id: 0,
    label: "Home",
    path: "/",
    icon: <HomeIcon className="w-4 h-4" />,
  },
  {
    id: 1,
    label: "Wer sind wir?",
    path: "/about",
    icon: <UserGroupIcon className="w-4 h-4" />,
  },
  {
    id: 2,
    label: "Impressum",
    path: "/impressum",
    icon: <LibraryIcon className="w-4 h-4" />,
  },
];

const Sidebar = () => {
  const [sidebar, setSidebar] = useRecoilState(sidebarState);

  let history = useHistory();
  let [theme, setTheme] = useRecoilState(themeState);

  return (
    <>
      <div
        id="Sidebar"
        className="w-full flex flex-col p-2 justify-between space-y-4"
      >
        <div>
          <h1
            id="Sidebar.title"
            className="text-xl text-logo text-gray-800 dark:text-gray-200 py-4"
          >
            Sidebar
          </h1>
          <div id="Sidebar.item-list" className="flex flex-col space-y-2">
            {items.map((item: navitem) => (
              <button
                key={item.id}
                id={`Sidebar.item#${item.id}`}
                className="p-2 w-full flex flex-row justify-between items-center hover:bg-gray-300 dark:hover:bg-gray-800 hover:text-logo-dark dark:hover:text-logo-light rounded cursor-pointer"
                onClick={() => {
                  history.push(item.path);
                  setSidebar(false);
                }}
              >
                <p>{item.label}</p>
                {item.icon}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-between p-2 border-t-2 border-gray-400">
          <h1>Theme</h1>
          <div className="flex justify-between">
            <button
              className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-800"
              onClick={() => setTheme("light")}
              disabled={theme === "light" && true}
            >
              <SunIcon
                className={`w-4 h-4 ${
                  theme === "light" ? "text-logo-dark" : "text-white"
                }`}
              />
            </button>

            <button
              className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-800"
              onClick={() => setTheme("dark")}
              disabled={theme === "dark" && true}
            >
              <MoonIcon
                className={`w-4 h-4 ${
                  theme === "dark" ? "text-logo-light" : "text-dark"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        id="Sidebar.close-button"
        className="absolute right-0 top-0 p-2 -mr-14"
      >
        <button
          id="Header.menu-button"
          className="p-2 rounded border border-transparent hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:border-gray-500"
          onClick={() => setSidebar(!sidebar)}
        >
          <XIcon className="text-logo w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
