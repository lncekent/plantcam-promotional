import React from "react";
import { Link } from "react-router";
import { useState } from "react";

const Header = () => {
  const [activeSelection,setActiveSelection] = useState("");

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
          <a href="#features"
          onClick={() =>setActiveSelection("features")}
            className={`hover:text-primary transition-colors font-label-lg text-label-lg ${activeSelection ==="features"
              ? "text-primary ":
              "text-on-surface-variant"}`
            }
          >
            Features
          </a>
          <a href="#how-it-works"
            className={` hover:text-primary transition-colors font-label-lg text-label-lg ${
              activeSelection === "how-it-works" ?
              "text-primary" : "text-on-surface-variant"
            }`}
            onClick={()=> setActiveSelection("how-it-works")}
          >
            How it Works
          </a>
        </nav>
        <a
          href="/PlantCam.apk"
          download="PlantCam.apk"
          className="bg-primary text-on-primary px-lg py-sm rounded-full font-label-lg text-label-lg active:scale-95 transition-transform hover:opacity-90"
        >
          Download APK
        </a>
      </div>
    </header>
  );
};

export default Header;
