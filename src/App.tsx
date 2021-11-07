import { Dialog, Transition } from "@headlessui/react";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import WerSindWir from "./pages/WerSindWir";
import { sidebarState, themeState } from "./recoilStates";

const App = () => {
  const [sidebar, setSidebar] = useRecoilState(sidebarState);
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, []); // eslint-disable-line

  useEffect(() => {
    localStorage.setItem("theme", theme);
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <Router>
      <main
        id="App.main"
        className="w-full h-screen bg-white dark:bg-black text-black dark:text-white"
      >
        <Transition appear show={sidebar}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto text-black dark:text-white"
            onClose={() => setSidebar(false)}
          >
            <Transition.Child
              enter="transform transition ease-out duration-500"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in duration-500"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div
                id="App.main.sidebar"
                className="absolute z-20 w-72 h-screen bg-gray-200 dark:bg-gray-900"
              >
                <Sidebar />
              </div>
            </Transition.Child>

            <Transition.Child
              enter="transform transition ease-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transform transition ease-in duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
          </Dialog>
        </Transition>
        <div
          id="App.main.page"
          className="w-full h-screen flex flex-col overflow-y-auto"
        >
          <header
            id="App.header"
            className="sticky top-0 z-10 bg-white dark:bg-black"
          >
            <Header />
          </header>
          <div id="App.body" className="flex-grow p-2 sm:p-6">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <WerSindWir />
              </Route>
              <Route path="/impressum">
                <Impressum />
              </Route>
            </Switch>
          </div>
          <footer id="App.footer">
            <Footer />
          </footer>
        </div>
      </main>
    </Router>
  );
};

export default App;
