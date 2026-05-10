import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section
      className="py-xl md:py-32 px-margin-mobile md:px-[48px]"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xl">
              Get Started in Minutes
            </h2>
            <div className="space-y-xl">
              <div className="flex gap-lg">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary-container/10 flex items-center justify-center font-bold text-primary">
                  1
                </div>
                <div>
                  <h4 className="font-title-lg text-title-lg mb-xs">
                    Download the APK
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Click the 'Download APK' button to save the installer file
                    to your Android device.
                  </p>
                </div>
              </div>
              <div className="flex gap-lg">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary-container/10 flex items-center justify-center font-bold text-primary">
                  2
                </div>
                <div>
                  <h4 className="font-title-lg text-title-lg mb-xs">
                    Enable External Sources
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Go to Settings &gt; Security and enable 'Install from
                    Unknown Sources' for your browser.
                  </p>
                </div>
              </div>
              <div className="flex gap-lg">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary-container/10 flex items-center justify-center font-bold text-primary">
                  3
                </div>
                <div>
                  <h4 className="font-title-lg text-title-lg mb-xs">
                    Launch PlantCam
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Open the file, click Install, and start scanning your garden
                    immediately.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-surface-container rounded-lg p-xl relative overflow-hidden h-[500px]"
          >
            <img
              alt="Person scanning a leaf"
              className="w-full h-full object-cover rounded-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlJEAN1A8mSk5FdTsZNAP4pFUG0P9TbcTqFfaFBzTJGlTJ8B3Ain7SpOCjbtkigHgY8ewqVmYRfSsTAm8-WvxGP26ckJBY0Fe1g8m8d7wloJThEojWzFI0nFA0E3EX7lgTe1pgeLu7IKdUAnjbAT0NA5SzZb-f4qJdYdhbB_V8HVs41PGpWWUpnV8tKG8rH-9CWlFcrdfgr-_7cQgUNkx8-O7SkaCN7JtNkGmO-iBsy0ZG7SYhEVzThwBg_jropWUiTBwOTplUHgp7"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
