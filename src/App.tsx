import { Transition } from "@headlessui/react";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import { sidebarState, themeState } from "./recoilStates";

const App = () => {
  const sidebar = useRecoilValue(sidebarState);
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    if (!("theme" in localStorage)) {
      setTheme("light");
    } else {
      setTheme(localStorage.getItem("theme") || "light");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log(theme);
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
        <Transition
          show={sidebar}
          enter="transform transition ease-out duration-500"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in duration-500"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div
            id="App.main.sidebar"
            className="absolute w-72 h-screen bg-gray-200 dark:bg-gray-900"
          >
            <Sidebar />
          </div>
        </Transition>
        <div
          id="App.main.page"
          className="w-full h-screen flex flex-col overflow-y-auto"
        >
          <header id="App.header">
            <Header />
          </header>
          <div id="App.body" className="flex-grow p-6">
            <Switch>
              <Route exact path="/">
                <Home />
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
