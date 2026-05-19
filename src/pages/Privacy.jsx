import {
  Brain,
  Camera,
  CircleCheck,
  Download,
  ShieldCheck,
} from "lucide-react";

const dataCollectionItems = [
  {
    label: "Image Data:",
    text: "Photos of plants taken for diagnosis.",
  },
  {
    label: "Device Info:",
    text: "Technical specs to optimize APK performance.",
  },
  {
    label: "Usage Data:",
    text: "Basic interaction logs to improve the AI.",
  },
];

const rights = [
  "Right to Access",
  "Right to Erasure",
  "Data Portability",
  "Opt-out of AI Training",
];

const Privacy = () => {
  return (
    <main className="bg-surface px-margin-mobile py-xl md:px-xl md:py-[50px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-xl">
        <section className="flex flex-col items-start gap-sm">
          <div className="inline-flex items-center gap-sm rounded-full bg-surface-container-high px-md py-xs text-primary">
            <ShieldCheck className="size-[14px]" strokeWidth={2.4} />
            <span className="font-label-sm text-label-sm uppercase">
              Privacy First
            </span>
          </div>

          <div className="pt-sm">
            <h1 className="font-display-lg text-display-lg text-on-surface">
              Privacy Policy
            </h1>
            <p className="mt-xs font-body-lg text-body-lg text-on-surface-variant">
              Last Updated: May 18, 2026
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-xl">
          <article className="rounded-lg bg-white p-xl shadow-[0px_4px_20px_rgba(0,110,40,0.06)]">
            <div className="flex flex-col gap-md md:flex-row md:items-start">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary-container text-primary">
                <ShieldCheck className="size-5" strokeWidth={2.2} />
              </div>

              <div className="flex flex-col gap-md">
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  1. Introduction
                </h2>
                <p className="font-body-md text-body-md leading-[24px] text-on-surface-variant md:max-w-[760px]">
                  At PlantCam, we believe that the journey of gardening should
                  be rooted in trust. Your privacy is as vital as the health of
                  your plants. This policy outlines our commitment to protecting
                  the personal and botanical data you share with us while using
                  our AI-driven diagnosis and care platform.
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-gutter-bento md:grid-cols-2">
            <article className="rounded-lg border-t-4 border-primary bg-white px-xl pb-[46px] pt-[36px] shadow-[0px_4px_20px_rgba(0,110,40,0.06)]">
              <Camera className="mb-md size-5 text-primary" strokeWidth={2.2} />

              <h2 className="mb-md font-title-lg text-title-lg text-on-surface">
                2. Data Collection
              </h2>

              <ul className="flex flex-col gap-sm">
                {dataCollectionItems.map((item) => (
                  <li
                    className="flex items-start gap-sm font-body-md text-body-md text-on-surface-variant"
                    key={item.label}
                  >
                    <CircleCheck
                      className="mt-[2px] size-4 shrink-0 text-primary"
                      strokeWidth={2.4}
                    />
                    <span>
                      <strong className="font-bold text-on-surface">
                        {item.label}
                      </strong>{" "}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg border-t-4 border-secondary bg-white px-xl pb-xl pt-[36px] shadow-[0px_4px_20px_rgba(0,110,40,0.06)]">
              <Brain className="mb-md size-5 text-primary" strokeWidth={2.2} />

              <h2 className="mb-md font-title-lg text-title-lg text-on-surface">
                3. AI Processing
              </h2>

              <p className="mb-md font-body-md text-body-md leading-[24px] text-on-surface-variant">
                Your images are analyzed using a hybrid model of on-device and
                secure cloud-based AI.
              </p>

              <div className="rounded-[6px] bg-surface-container p-md">
                <p className="font-label-lg text-label-lg leading-[18px] text-primary">
                  On-device processing ensures rapid response, while cloud
                  analysis provides deep scientific insights into 5,000+ species.
                </p>
              </div>
            </article>
          </div>

          <article className="overflow-hidden rounded-lg bg-white shadow-[0px_4px_20px_rgba(0,110,40,0.06)] md:flex">
            <div className="relative h-[260px] md:h-auto md:w-1/3 md:min-w-[300px]">
              <img
                alt="Lush greenhouse plants illuminated by a window"
                className="h-full w-full object-cover"
                src="https://res.cloudinary.com/dxatb3m2q/image/upload/q_auto,f_auto/v1778241751/plant-roots_b25pcr.jpg"
              />
              <div className="absolute inset-0 bg-primary/10 backdrop-blur-[1px]" />
            </div>

            <div className="flex flex-1 flex-col gap-md p-xl">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                4. Data Security &amp; Precision
              </h2>

              <p className="font-body-md text-body-md leading-[24px] text-on-surface-variant">
                We apply scientific precision to data security. All botanical
                data transmitted is encrypted using enterprise-grade protocols.
                Your personal garden history is stored in a private vault,
                accessible only to you.
              </p>

              <h2 className="pt-md font-title-lg text-title-lg text-on-surface">
                5. Your Rights
              </h2>

              <div className="flex flex-wrap gap-sm">
                {rights.map((right) => (
                  <span
                    className="rounded-full bg-surface-container px-md py-sm font-label-lg text-label-lg text-primary"
                    key={right}
                  >
                    {right}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <section className="rounded-lg bg-surface-container-low p-xl text-center">
            <h2 className="font-headline-md text-headline-md text-on-surface">
              6. Updates
            </h2>

            <p className="mx-auto mt-sm max-w-[672px] font-body-md text-body-md text-on-surface-variant">
              As we grow, this policy may evolve. We will notify you of any
              significant changes via the app or email. Continued use of
              PlantCam constitutes acceptance of the latest terms.
            </p>

            <div className="mt-lg flex flex-col justify-center gap-md sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-sm rounded-full bg-secondary px-lg py-sm font-label-lg text-label-lg text-on-primary-container transition-opacity hover:opacity-90"
                href="mailto:privacy@plantcam.app"
              >
                <ShieldCheck className="size-4" strokeWidth={2.2} />
                Contact Data Officer
              </a>
              <a
                className="inline-flex items-center justify-center gap-sm rounded-full bg-white px-lg py-sm font-label-lg text-label-lg text-primary shadow-[0px_4px_10px_rgba(0,110,40,0.06)] transition-colors hover:bg-surface-container"
                href="/privacy"
              >
                <Download className="size-4" strokeWidth={2.2} />
                Download PDF
              </a>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Privacy;
