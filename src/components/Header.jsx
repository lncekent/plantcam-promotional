import { useEffect, useState } from "react";
import { Link } from "react-router";

const NAV_SECTIONS = ["features", "how-it-works"];

const Header = () => {
  const [activeSelection, setActiveSelection] = useState("");

  useEffect(() => {
    const updateActiveSection = () => {
      const activationPoint = window.innerHeight * 0.4;

      const currentSection = NAV_SECTIONS.find((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) {
          return false;
        }

        const sectionPosition = section.getBoundingClientRect();

        return (
          sectionPosition.top <= activationPoint &&
          sectionPosition.bottom >= activationPoint
        );
      });

      setActiveSelection(currentSection || "");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const getNavLinkClass = (sectionId) =>
    `hover:text-primary transition-colors font-label-lg text-label-lg ${
      activeSelection === sectionId ? "text-primary" : "text-on-surface-variant"
    }`;

  return (
    <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0px_4px_20px_rgba(0,110,40,0.06)]">
      <div className="flex items-center justify-between px-margin-mobile md:px-xl py-md max-w-7xl mx-auto">
        <Link to={"/"} className="flex items-center gap-sm">
          <img
            src="https://res.cloudinary.com/dxatb3m2q/image/upload/q_auto,f_auto/v1778164957/icon-app-ui_eazptd.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="font-title-lg text-title-lg font-bold text-primary">
            PlantCam
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-lg">
          <Link
            to={"/#features"}
            onClick={() => setActiveSelection("features")}
            className={getNavLinkClass("features")}
          >
            Features
          </Link>
          <Link
            to={"/#how-it-works"}
            className={getNavLinkClass("how-it-works")}
            onClick={() => setActiveSelection("how-it-works")}
          >
            How it Works
          </Link>
        </nav>
        <a
          href="https://github.com/lncekent/plantcam/releases/download/v1.0.0/PlantCam.apk"
          className="bg-primary text-on-primary px-lg py-sm rounded-full font-label-lg text-label-lg active:scale-95 transition-transform hover:opacity-90"
        >
          Download APK
        </a>
      </div>
    </header>
  );
};

export default Header;
