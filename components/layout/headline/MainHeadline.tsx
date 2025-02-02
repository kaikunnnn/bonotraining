import Link from "next/link";
import { Button } from "@/components/ui/button";

type MainHeadlineProps = {
  mainTitle: {
    first: string;  // "みんなで"
    second: string; // "デザトレ"
  };
  description: string; // "SNS情報ばっかり見て肩こわばってない？そうだ！デザイン筋を鍛える旅に出かけようっ！"
  buttonText: string; // "使い方を見る"
  className?: string;
};

const MainHeadline: React.FC<MainHeadlineProps> = ({
  mainTitle,
  description,
  buttonText,
  className
}) => {
  return (
    <div className={`w-[502px] h-52 flex-col justify-start items-center gap-4 inline-flex ${className || ''}`}>
        <div className="flex-col justify-start items-center flex">
            <div className="justify-start items-start inline-flex">
                <div className="text-center text-foreground text-6xl font-bold">{mainTitle.first}</div>
                <div className="text-center text-6xl font-bold text-transparent [-webkit-text-stroke:2px_theme(colors.foreground)]">{mainTitle.second}</div>
            </div>
        </div>
        <div className="self-stretch text-center text-foreground/80 text-xl font-bold font-['Noto Sans'] leading-loose tracking-wide">{description}</div>
        <Link href="/guide">
          <Button 
            variant="outline"
            className="px-4 py-3 rounded-full border-2 border-foreground font-['Rounded Mplus 1c Bold']"
          >
            {buttonText}
          </Button>
        </Link>
    </div>
  );
};

export default MainHeadline;