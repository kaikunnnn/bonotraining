"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FooterBanner } from "../decoration/FooterBanner/FooterBanner";
import ScrollTextSection from "../decoration/ScrollTextSection";
function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["ゼロからデザイン", "ポートフォリオ作成", "休日トレーニング", "スキルアップ", "ペアデザイン"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="bg-[#f3f3f3] flex flex-col gap-24">
        <div className="flex gap-8 py-20 pb-0 lg:pt-40 items-center justify-center flex-col ">
          <div className="w-full flex gap-4 flex-col items-center">
            <h1 className="w-full block text-4xl md:text-6xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50 mb-8 font-bold block">デザトレ使って</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                          y: 0,
                          opacity: 1,
                        }
                        : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight  max-w-2xl text-center">
              SNS情報ばっかり見て肩こわばってない？<br />
              そうだ！デザイン筋を鍛える旅に出かけようっ！
            </p>
          </div>
          <div className="flex flex-row gap-3">
            {/* <Button size="lg" className="gap-4" variant="outline">
              Jump on a call <PhoneCall className="w-4 h-4" />
            </Button> */}
            <Button size="lg" className="gap-4">
              Sign up here <MoveRight className="w-4 h-4" />
            </Button>
          </div>

        </div>
        <FooterBanner />
      </div>

    </div>
  );
}

export { AnimatedHero };
