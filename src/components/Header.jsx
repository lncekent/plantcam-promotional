import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0px_4px_20px_rgba(0,110,40,0.06)]">
      <div className="flex items-center justify-between px-margin-mobile md:px-xl py-md max-w-7xl mx-auto">
        <div className="flex items-center gap-sm">
          <span
            className="material-symbols-outlined text-primary text-3xl"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            eco
          </span>
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
          <a
            className="text-on-surface-variant hover:text-primary transition-colors font-label-lg text-label-lg"
            href="#about"
          >
            About
          </a>
        </nav>
        <button className="bg-primary text-on-primary px-lg py-sm rounded-full font-label-lg text-label-lg active:scale-95 transition-transform hover:opacity-90">
          Download APK
        </button>
      </div>
    </header>
  );
};

export default Header;
