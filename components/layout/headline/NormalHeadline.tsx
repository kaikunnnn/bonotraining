import Link from "next/link";
import { Button } from "@/components/ui/button";

type NormalHeadlineProps = {
  englishTitle: string;    // "Nanka Kakkoii Eigo"
  japaneseTitle: string;   // "スキル特化トレーニング"
  className?: string;
};

const NormalHeadline: React.FC<NormalHeadlineProps> = ({
  englishTitle,
  japaneseTitle,
  className
}) => {
  return (
    <div className={`
      flex-col justify-start items-start gap-2 inline-flex
      h-[82px] md:h-[100px] lg:h-[120px]
      ${className || ''}
    `}>
      <div className="
        self-stretch 
        text-foreground
        text-sm md:text-base lg:text-lg
        font-medium 
        font-['Rounded Mplus 1c']
        leading-relaxed
        transition-all duration-200
      ">
        {englishTitle}
      </div>
      <div className="
        self-stretch
        text-foreground
        text-2xl md:text-3xl lg:text-[40px]
        font-medium
        font-['Rounded Mplus 1c']
        leading-relaxed
        transition-all duration-200
      ">
        {japaneseTitle}
      </div>
    </div>
  );
};

export default NormalHeadline;