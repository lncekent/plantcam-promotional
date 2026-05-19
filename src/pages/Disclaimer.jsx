import {
  BadgePercent,
  FlaskConical,
  Gavel,
  Leaf,
  Microscope,
  Sprout,
} from "lucide-react";
import disclaimerGreenhouse from "../assets/disclaimer-greenhouse.png";

import { useEffect, useState } from "react";

const specialtyTags = ["Solanum", "Capsicum"];


const Disclaimer = () => {
  return (
    <main className="bg-surface px-margin-mobile py-xl md:px-xl md:py-[50px]">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-xl">
        <section className="flex max-w-[672px] flex-col gap-md">
          <h1 className="font-display-lg text-display-lg text-primary">
            Medical &amp; Botanical Disclaimer
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Transparency and scientific integrity are at the heart of PlantCam
            AI. Please review our official stance on diagnostic accuracy and
            professional consultation.
          </p>
        </section>

        <section className="grid gap-gutter-bento md:grid-cols-12">
          <article className="rounded-lg border border-surface-variant/50 bg-surface p-xl shadow-[0px_4px_20px_rgba(0,110,40,0.06)] md:col-span-8">
            <div className="flex flex-col gap-md sm:flex-row sm:items-start">
              <Microscope
                className="mt-xs size-8 shrink-0 text-primary"
                strokeWidth={2}
              />
              <div className="flex flex-col gap-sm">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  AI Diagnostic Accuracy
                </h2>
                <span className="w-fit rounded-full border border-secondary/20 bg-secondary/10 px-sm py-xs font-label-sm text-label-sm uppercase text-primary">
                  98.4% Precision Rate
                </span>
              </div>
            </div>

            <p className="mt-lg font-body-md text-body-md leading-[24px] text-on-surface-variant">
              Our neural network has been trained on over 2 million botanical
              datasets to provide rapid identification. While we maintain a high
              accuracy rate, all identifications are strictly for informational
              purposes. Botanical health can be influenced by micro-climates and
              subtle soil variations that visual AI may not immediately detect.
              These results should never replace professional agricultural
              advice or rigorous lab testing.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-lg bg-primary p-xl text-white shadow-[0px_4px_20px_rgba(0,110,40,0.06)] md:col-span-4">
            <div className="relative z-10 flex h-full flex-col justify-between gap-xl">
              <div className="flex flex-col gap-md">
                <h2 className="font-headline-md text-headline-md">
                  Focus Area
                </h2>
                <p className="font-body-md text-body-md leading-[20px] opacity-90">
                  PlantCam is specifically engineered for{" "}
                  <strong>Solanaceous plants</strong> (tomatoes, peppers,
                  potatoes). Results for other plant families may exhibit
                  reduced accuracy levels.
                </p>
              </div>

              <div className="flex flex-wrap gap-xs pt-xl">
                {specialtyTags.map((tag) => (
                  <span
                    className="rounded-full bg-white/10 px-md py-xs font-label-sm text-label-sm backdrop-blur-sm"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <Sprout data-no-skeleton className="absolute -bottom-8 -right-8 size-32 rotate-12 text-white/10" />
          </article>

          <article className="rounded-lg bg-surface-container-low p-xl shadow-[0px_4px_10px_rgba(0,110,40,0.06)] md:col-span-6">
            <div className="flex items-center gap-md">
              <div className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-[0px_4px_10px_rgba(0,110,40,0.06)]">
                <Leaf className="size-5" strokeWidth={2.2} />
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Professional Advice
              </h2>
            </div>

            <p className="mt-md font-body-md text-body-md leading-[20px] text-on-surface-variant">
              Users are strongly advised to consult local agricultural experts,
              extension offices, or plant pathologists for confirmed
              professional treatment plans. This is particularly critical
              regarding the application of chemical interventions, pesticides,
              or large-scale irrigation adjustments.
            </p>
          </article>

          <article className="rounded-lg border border-surface-variant bg-white p-xl shadow-[0px_4px_10px_rgba(0,110,40,0.06)] md:col-span-6">
            <div className="flex items-center gap-md">
              <Gavel className="size-8 shrink-0 text-primary" strokeWidth={2} />
              <h2 className="font-headline-md text-headline-md text-on-surface">
                No Liability
              </h2>
            </div>

            <p className="mt-md font-body-md text-body-md leading-[20px] text-on-surface-variant">
              PlantCam AI, its developers, and its parent entity are not liable
              for crop loss, economic damages, or physical injuries resulting
              from incorrect self-diagnosis or the application of guidance
              provided by the application. By using this service, you
              acknowledge that you are the final decision-maker for your
              botanical assets.
            </p>
          </article>
        </section>

        <section className="relative h-96 overflow-hidden rounded-xl">
          <img
            alt="Scientific greenhouse with rows of healthy plants"
            className="h-full w-full object-cover object-center"
            src={disclaimerGreenhouse}
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-xl">
            <div className="flex flex-col gap-xs text-white">
              <div className="flex items-center gap-sm font-label-lg text-label-lg uppercase tracking-widest opacity-80">
                <FlaskConical className="size-4" strokeWidth={2.2} />
                Scientific Rigor
              </div>
              <h2 className="font-headline-lg text-headline-lg">
                Bridging AI and Agriculture
              </h2>
            </div>
          </div>
          <BadgePercent className="absolute right-xl top-xl size-10 text-white/70" />
        </section>
      </div>


    </main>

  );
};

export default Disclaimer;
