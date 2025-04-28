import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const Hero = () => {
  const t = useTranslations("HomePage.HeroSection");
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-top z-0"
        muted
        autoPlay
        loop
        preload="none"
        playsInline
      >
        <source src="/Hero_video.mp4" type="video/mp4" />
      </video>
      {/* Content */}
      <div className="relative z-10 max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
        <div className="my-auto ">
          <h1 className="mt-6 w-full text-3xl md:text-4xl text-neutral-50 font-bold !leading-[1.8] ">
            {t("HeroTitle")}
            <br />
            {t("HeroSubtitle")}
          </h1>
          <div className="mt-12 flex items-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base text-neutral-50 bg-transparent cursor-pointer"
            >
              {t("HeroButton")} <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
