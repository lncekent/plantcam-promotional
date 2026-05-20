import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const homePathname = "/";
    if (hash) {
      const section = document.querySelector(hash);

      if (section) {
        section.scrollIntoView({
          behavior: homePathname ? "smooth" : "instant",
          block: "start",
        });
      }
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
