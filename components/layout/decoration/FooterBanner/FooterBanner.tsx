import React from "react";
import { footerBannerAssets } from "./assets";

export const FooterBanner: React.FC = () => {
  return (
    <>
      <style>
        {`
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .scroll-animation {
        animation: scroll 20s linear infinite;
      }
    `}
      </style>
      <div className="w-full py-4 border-t-2 border-b-2 border-black flex-col justify-start items-start gap-2.5 inline-flex overflow-hidden">
        <div className="scroll-animation self-stretch justify-start items-center gap-2 inline-flex">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="justify-center items-center gap-2 flex shrink-0">
              <img
                className="relative w-[242px] h-[15px]"
                alt="Svg"
                src={footerBannerAssets.svg.src}
              />
              <img
                className="relative w-auto h-[24px]"
                alt="Svg"
                src={footerBannerAssets.minnadeDesignTraining.src}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};