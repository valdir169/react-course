import React, { useEffect, useState } from "react";
import { EVENTS } from "./consts";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
];

function Router({ routes = [], defaultComponent: DefaultComponent = null }) {}

/* function for SPA */
function App() {
  // 1.Primera forma de hacer
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  return (
    <main>
      {currentPath === "/" && <Home />}
      {currentPath === "/about" && <About />}
    </main>
  );
}

export default App;
