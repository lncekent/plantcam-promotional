import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-xl md:pt-24 pb-16 md:pb-32 px-margin-mobile md:px-[48px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 text-center md:text-left"
        >
          <span className="inline-flex items-center px-md py-xs rounded-full bg-primary-container/10 text-primary font-label-sm text-label-sm mb-lg">
            <span
              className="material-symbols-outlined text-[14px] mr-1"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              verified
            </span>
            AI-POWERED PRECISION
          </span>
          <h1 className="font-display-lg text-display-lg md:text-5xl text-on-surface leading-tight tracking-tight mb-md">
            Your Pocket Solanaceous <br className="hidden md:block" />
            <span className="text-primary">Plant Doctor.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-lg mx-auto md:mx-0">
            Identify plant diseases in seconds, get expert care tips, and keep
            your garden thriving. Powered by on-device AI for instant results
            anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-md justify-center md:justify-start">
            <a
              href="/PlantCam.apk"
              download="PlantCam.apk"
              className="bg-primary text-on-primary px-xl py-md rounded-full font-label-lg text-label-lg flex items-center justify-center gap-sm hover:shadow-lg transition-all active:scale-95"
            >
              <span className="material-symbols-outlined">android</span>
              Download Android APK
            </a>
            <a target="_blank" href="https://res.cloudinary.com/dxatb3m2q/video/upload/q_auto,f_auto/v1779062390/plantcam-demo_f3bnid.mp4" className="bg-surface-container-high text-primary px-xl py-md rounded-full font-label-lg text-label-lg flex items-center justify-center gap-sm hover:bg-surface-container-highest transition-all active:scale-95">
              <span className="material-symbols-outlined">play_circle</span>
              Watch Demo
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex md:justify-end justify-center"
        >
          <div className="absolute w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="relative inline-block max-w-[400px] w-full">
            <img
              alt="Smartphone displaying a plant scan"
              className="w-full botanical-shadow rounded-[3rem] border-[12px] border-on-surface"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCykSKskcJIX5fc2QrVpjCckoq8CFQStvLWu9Dx1V8Vj0JFgHyMQBOia9dHOsAdrsmzkvafKzfozKH28vEk944JFORTnSAhK7fGWgRw1pQ8YeCTJXt42_oLkZESJAscvmoH0XQHlKuSUz7PFn3xqcPzBkMTTxIIt9ExmhVJGefPD4g-lRzaZ27zE6zpY9rZq86oJiLmNza8l-VY2tCnPDtCM-9ygabu1Fr-nd6uNF9fp6UiHp4nWP0M1u60X51dUyFSF82KCj9P2XV6"
            />
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1.1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
              className="absolute -bottom-6 left-0 md:-left-12 lg:-left-16 bg-white botanical-shadow p-md rounded-lg flex items-center gap-md border border-surface-container z-20"
            >
              <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  health_metrics
                </span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  DIAGNOSIS ACCURACY
                </p>
                <p className="font-title-lg text-title-lg font-bold text-primary">
                  98.4%
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
