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
    const handlePopState = () => {
      const p = window.location.pathname.toLowerCase().replace(/\/$/, "");
      setPath(p === "" ? "/" : p);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to) => {
    const cleanTo = to.toLowerCase().replace(/\/$/, "") || "/";
    if (cleanTo !== path) {
      window.history.pushState({}, "", cleanTo);
      setPath(cleanTo);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
