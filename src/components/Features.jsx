import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section
      className="py-xl md:py-32 bg-surface-container-low px-margin-mobile md:px-[48px]"
      id="features"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">
            Everything your plants need.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
            From instant diagnosis to personalized care routines, we've got your
            garden covered.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-gutter-bento auto-rows-[240px]"
        >
          {/* Card 1: Instant AI Diagnosis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 md:row-span-2 bg-white rounded-lg botanical-shadow p-xl flex flex-col justify-between overflow-hidden relative"
          >
            <div className="max-w-md">
              <span className="material-symbols-outlined text-primary text-4xl mb-md">
                auto_awesome
              </span>
              <h3 className="font-headline-md text-headline-md mb-sm">
                Instant AI Diagnosis
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Simply point your camera. Our neural network identifies hundreds
                of diseases in Solanaceous plants instantly, even offline.
              </p>
            </div>
            <div className="absolute -right-12 -bottom-12 opacity-20">
              <span className="material-symbols-outlined text-[240px] text-primary">
                psychology
              </span>
            </div>
            <div className="mt-xl h-48 w-full bg-surface-container rounded-lg overflow-hidden border border-outline-variant/30">
              <img
                alt="AI Scanning leaves"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkLcKBrVbpSVuSrVBSCG8e_p8bUP-vrNWA0oi9bNNGAD9_s1ueY1zvpqGfu7z2sEh1BZSXQw0kDZqiEIL7bcew0bvbWMeWJgP082yOuoioA_MMZpSLaHnuJMIB5nGeJ6Z-MBkI0Aqe6ysSpT-I1s6_cgnxJbtEFWrBoQubi2arAqHx2x6OzwdGjs5bAgukJj-knpOnlMjQ6l8e2PyRmRhC7hAepbkh8t4p1swi1c_6ve7oZVbFBRpyDCLNZqXcdpbMPNYn0273hIS9"
              />
            </div>
          </motion.div>
          {/* Card 2: Scan History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 md:row-span-1 bg-white rounded-lg botanical-shadow p-xl flex flex-col"
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-md">
              history
            </span>
            <h3 className="font-title-lg text-title-lg mb-sm">Scan History</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Track your plant's journey over time and monitor recovery
              progress.
            </p>
          </motion.div>
          {/* Card 3: Daily Botanical */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-4 md:row-span-1 bg-primary text-on-primary rounded-lg botanical-shadow p-xl flex flex-col justify-between"
          >
            <div>
              <span className="material-symbols-outlined text-on-primary-container text-4xl mb-md">
                local_florist
              </span>
              <h3 className="font-title-lg text-title-lg mb-sm">
                Daily Botanical
              </h3>
              <p className="font-body-md text-body-md opacity-90">
                Expert tips curated for your specific garden conditions every
                single morning.
              </p>
            </div>
            <a
              className="text-on-primary font-label-lg text-label-lg underline underline-offset-4"
              href="#"
            >
              Learn more →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
