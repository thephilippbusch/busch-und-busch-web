import { XIcon, HomeIcon, LibraryIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { sidebarState } from "../recoilStates";

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
    label: "Impressum",
    path: "/impressum",
    icon: <LibraryIcon className="w-4 h-4" />,
  },
];

const Sidebar = () => {
  const [sidebar, setSidebar] = useRecoilState(sidebarState);

  return (
    <>
      <div id="Sidebar" className="w-full flex flex-col p-2">
        <h1
          id="Sidebar.title"
          className="text-xl text-logo text-gray-800 dark:text-gray-200 py-4"
        >
          Sidebar
        </h1>
        <div id="Sidebar.item-list" className="flex flex-col space-y-2">
          {items.map((item: navitem) => (
            <div
              key={item.id}
              id={`Sidebar.item#${item.id}`}
              className="p-2 w-full flex flex-row justify-between items-center hover:bg-gray-300 dark:hover:bg-gray-800 hover:text-logo-dark dark:hover:text-logo-light rounded cursor-pointer"
            >
              <p>{item.label}</p>
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      <div
        id="Sidebar.close-button"
        className="absolute right-0 top-0 p-2 -mr-14"
      >
        <button
          id="Header.menu-button"
          className="p-2 rounded border border-transparent hover:bg-gray-800 focus:outline-none focus:border-gray-500"
          onClick={() => setSidebar(!sidebar)}
        >
          <XIcon className="text-logo w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
