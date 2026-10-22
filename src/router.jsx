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
      window.scrollTo(0, 0);
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
