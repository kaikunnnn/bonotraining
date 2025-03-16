"use client";

import { useEffect, useMemo, useState, useRef } from "react";
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
  const [containerWidth, setContainerWidth] = useState("auto");
  const [containerHeight, setContainerHeight] = useState("auto");
  const titleRefs = useRef<(HTMLSpanElement | null)[]>([]);

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

  useEffect(() => {
    // 現在のタイトル要素の幅と高さを取得して設定
    const currentTitleEl = titleRefs.current[titleNumber];
    if (currentTitleEl) {
      setContainerWidth(`${currentTitleEl.offsetWidth}px`);
      setContainerHeight(`${currentTitleEl.offsetHeight + 20}px`);
    }
  }, [titleNumber]);

  return (
    <div className="w-full">
      <div className="bg-[#f3f3f3] flex flex-col gap-24">
        <div className="flex gap-8 py-20 pb-0 lg:pt-40 items-center justify-center flex-col ">
          <div className="w-full flex gap-4 flex-col items-center">
            <h1 className="w-full block text-4xl md:text-6xl tracking-tighter text-center font-regular">
              <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center md:gap-2">
                <span className="text-spektr-cyan-50 font-bold">デザトレ使って</span>
                <span
                  className="relative flex justify-center overflow-hidden text-center"
                  style={{
                    width: containerWidth,
                    height: containerHeight,
                    transition: "width 0.3s ease, height 0.3s ease",
                    paddingTop: "10px",
                    paddingBottom: "10px"
                  }}
                >
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      ref={el => titleRefs.current[index] = el}
                      className="absolute font-semibold whitespace-nowrap"
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
              </div>
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
