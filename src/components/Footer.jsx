import React from "react";

const Footer = () => {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30">
      <div className="flex flex-col md:flex-row justify-between items-center gap-lg px-margin-mobile md:px-xl py-xl max-w-7xl mx-auto">
        <div className="flex flex-col gap-sm items-center md:items-start">
          <div className="flex items-center gap-sm">
            <img
              src="https://res.cloudinary.com/dxatb3m2q/image/upload/v1778164957/icon-app-ui_eazptd.png"
              alt="Logo"
              className="w-8 h-8"
            />
            <span className="font-title-lg text-title-lg text-on-surface">
              PlantCam
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left max-w-sm">
            © 2024 PlantCam AI. Dedicated to botanical health and scientific
            precision.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-lg">
          <nav className="flex gap-lg">
            <a
              className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md"
              href="#"
            >
              Disclaimer
            </a>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-margin-mobile pb-xl">
        <p className="text-[11px] leading-[15px] text-on-surface-variant/60 text-center uppercase tracking-widest font-semibold">
          Disclaimer: AI diagnostics are intended as a guide only. Consult a
          local agricultural expert for confirmed professional treatment plans.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
