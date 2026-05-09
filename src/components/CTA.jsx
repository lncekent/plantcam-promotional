import React from 'react';

const CTA = () => {
  return (
    <section className="py-24 px-margin-mobile">
      <div className="max-w-7xl mx-auto bg-primary rounded-xl p-xl md:p-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-xl opacity-10">
          <span
            className="material-symbols-outlined text-[300px]"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            eco
          </span>
        </div>
        <h2 className="font-display-lg text-display-lg text-on-primary mb-md relative z-10">
          Ready to save your garden?
        </h2>
        <p className="font-body-lg text-body-lg text-on-primary opacity-80 mb-xl max-w-xl mx-auto relative z-10">
          Join thousands of gardeners who trust PlantCam for
          professional-grade plant pathology insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-md justify-center relative z-10">
          <button className="bg-on-primary text-primary px-xl py-md rounded-full font-label-lg text-label-lg flex items-center justify-center gap-sm hover:bg-white transition-all active:scale-95">
            <span className="material-symbols-outlined">download</span>
            Download APK Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
