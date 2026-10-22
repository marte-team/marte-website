import { useState, useEffect, createContext, useContext } from "react";

const RouterContext = createContext({
  path: "/",
  navigate: () => {}
});

export function useRouter() {
  return useContext(RouterContext);
}

export function Router({ children }) {
  const getInitialPath = () => {
    try {
      const navEntries = window.performance?.getEntriesByType?.("navigation") || [];
      const isReload =
        (navEntries.length > 0 && navEntries[0].type === "reload") ||
        (window.performance?.navigation?.type === 1) ||
        sessionStorage.getItem("marte_reload_to_home") === "true";

      if (isReload && window.location.pathname !== "/" && window.location.pathname !== "") {
        sessionStorage.removeItem("marte_reload_to_home");
        window.history.replaceState(null, "", "/");
        return "/";
      }
    } catch (e) {}

    const p = window.location.pathname.toLowerCase().replace(/\/$/, "");
    return p === "" ? "/" : p;
  };

  const [path, setPath] = useState(getInitialPath);

  useEffect(() => {
    // Reset scroll to top on mount
    window.scrollTo(0, 0);

    const handlePopState = () => {
      const p = window.location.pathname.toLowerCase().replace(/\/$/, "");
      setPath(p === "" ? "/" : p);
      window.scrollTo(0, 0);
    };

    const handleBeforeUnload = () => {
      try {
        sessionStorage.setItem("marte_reload_to_home", "true");
      } catch (e) {}
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const navigate = (to) => {
    const cleanTo = to.toLowerCase().replace(/\/$/, "") || "/";
    if (cleanTo !== path) {
      window.history.pushState({}, "", cleanTo);
      setPath(cleanTo);
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function Link({ to, children, className = "", onClick, ...props }) {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to);
  };

  return (
    <a href={to} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
