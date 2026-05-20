import {
  BadgeCheck,
  FlaskConical,
  Gavel,
  Leaf,
  PackageCheck,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Acceptance of Terms",
    Icon: BadgeCheck,
    text: "By downloading the PlantCam APK or accessing the AI diagnosis service, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application or services provided by PlantCam AI.",
    duration: 0.7,
  },
  {
    title: "2. Service Description",
    Icon: FlaskConical,
    text: "PlantCam provides an AI-driven platform specifically engineered for the identification of diseases in Solanaceous plants (such as tomatoes, potatoes, and peppers). Our proprietary machine learning models analyze images to provide rapid health assessments.",
    duration: 1,
  },
  {
    title: "3. APK Distribution",
    Icon: PackageCheck,
    text: 'Users acknowledge that the application is distributed via direct APK download. Installation may require enabling "Unknown Sources" in your device settings. Users assume all responsibility for maintaining device security during the installation process of the provided APK file.',
    duration: 1,
  },
  {
    title: "5. User Conduct",
    Icon: Gavel,
    text: "Users are prohibited from attempting to reverse-engineer the AI models, scraping data from our scanning services, or misusing the platform for non-botanical purposes. Violation of these terms may result in immediate suspension of service access.",
    duration: 0.8,
  },
  {
    title: "6. Limitation of Liability",
    Icon: ShieldCheck,
    text: "To the maximum extent permitted by law, PlantCam AI and its developers shall not be held liable for any crop loss, economic damages, or adverse outcomes resulting from incorrect self-diagnosis or the application of treatment suggestions based on AI guidance.",
    duration: 0.9,
  },
];

const TermsCard = ({ Icon, text, title, duration }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: duration, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="rounded-lg border border-outline-variant/20 bg-white p-[25px] shadow-[0px_4px_10px_rgba(0,110,40,0.06)]"
  >
    <div className="flex items-center gap-md">
      <div className="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-surface-container text-primary">
        <Icon className="size-5" strokeWidth={2.2} />
      </div>
      <h2 className="font-headline-md text-headline-md text-on-surface">
        {title}
      </h2>
    </div>

    <p className="mt-md font-body-md text-body-md leading-[24px] text-on-surface-variant">
      {text}
    </p>
  </motion.div>
);

const Terms = () => {
  const firstThreeSections = sections.slice(0, 3);
  const lastTwoSections = sections.slice(3);

  return (
    <main className="bg-surface px-margin-mobile py-xl md:px-xl md:py-[50px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-sm"
        >
          <h1 className="font-display-lg text-display-lg text-primary">
            Terms of Service
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Last updated: May 2026. Please read these terms carefully before
            using PlantCam AI services.
          </p>
        </motion.div>

        <section className="flex flex-col gap-lg">
          {firstThreeSections.map((section) => (
            <TermsCard key={section.title} {...section} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-lg border border-primary/20 bg-primary/5 p-lg"
          >
            <div className="flex items-center gap-md">
              <div className="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
                <ShieldAlert className="size-5" strokeWidth={2.2} />
              </div>
              <h2 className="font-headline-md text-headline-md text-primary">
                4. AI Disclaimer
              </h2>
            </div>

            <p className="mt-md font-body-md text-body-md font-medium text-on-surface-variant">
              Scientific Diagnostics &amp; Guide Disclaimer:
            </p>

            <blockquote className="mt-md border-l-4 border-primary pl-md font-body-md text-body-md italic leading-[24px] text-on-surface-variant">
              Diagnostics provided by PlantCam AI are intended for informational
              guidance only. The accuracy of AI identification can be affected
              by lighting, image quality, and environmental factors. Users
              should always consult with qualified agricultural experts or
              botanical scientists for a confirmed diagnosis and treatment plan
              before applying chemical interventions.
            </blockquote>
          </motion.div>

          {lastTwoSections.map((section) => (
            <TermsCard key={section.title} {...section} />
          ))}
        </section>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative h-64 overflow-hidden rounded-lg shadow-[0px_4px_20px_rgba(0,110,40,0.06)]"
        >
          <img
            alt="Scientific botanical study of young green plant leaves"
            className="h-full w-full object-cover object-center opacity-80"
            src="https://res.cloudinary.com/dxatb3m2q/image/upload/q_auto,f_auto/v1778241836/plant-dust_mydict.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-primary/0" />
          <div className="absolute bottom-lg left-lg flex items-center gap-sm rounded-full bg-white/85 px-md py-sm text-primary shadow-[0px_4px_10px_rgba(0,110,40,0.06)] backdrop-blur-sm">
            <Leaf className="size-4" strokeWidth={2.2} />
            <span className="font-label-lg text-label-lg">
              Botanical care, guided responsibly
            </span>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Terms;
