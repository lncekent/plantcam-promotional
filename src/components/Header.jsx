import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0px_4px_20px_rgba(0,110,40,0.06)]">
      <div className="flex items-center justify-between px-margin-mobile md:px-xl py-md max-w-7xl mx-auto">
        <div className="flex items-center gap-sm">
          <img
            src="https://res.cloudinary.com/dxatb3m2q/image/upload/q_auto,f_auto/v1778164957/icon-app-ui_eazptd.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="font-title-lg text-title-lg font-bold text-primary">
            PlantCam
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-lg">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg"
            href="#how-it-works"
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
