import Link from "next/link";
import { Button } from "@/components/ui/button";

type MainHeadlineProps = {
  mainTitle: {
    first: string;  // "みんなで"
    second: string; // "デザトレ"
  };
  description: string; // "SNS情報ばっかり見て肩こわばってない？そうだ！デザイン筋を鍛える旅に出かけようっ！"
  buttonText?: string; // オプショナルに変更
  buttonLink?: string;
  buttonAction?: () => void;
  showButton?: boolean; // ボタン表示の制御用
  className?: string;
};

const MainHeadline: React.FC<MainHeadlineProps> = ({
  mainTitle,
  description,
  buttonText = "使い方を見る", // デフォルト値を設定
  buttonLink = "/guide",
  buttonAction,
  showButton = true, // デフォルトでは表示
  className
}) => {
  return (
    <div className={`flex-col justify-start items-center gap-4 inline-flex ${className || ''}`}>
      <div className="flex-col justify-start items-center gap-5 flex">
        <h2 className="text-center text-foreground text-4xl font-bold">{mainTitle.first}</h2>
        <h4 className=" w-8/12 text-center text-foreground/80 text-xl font-bold font-['Noto Sans'] leading-loose tracking-wide">{description}</h4>
      </div>

      {showButton && buttonText && (
        buttonAction ? (
          <Button
            variant="outline"
            className="px-4 py-3 rounded-full border-2 border-foreground font-['Rounded Mplus 1c Bold']"
            onClick={buttonAction}
          >
            {buttonText}
          </Button>
        ) : (
          <Link href={buttonLink}>
            <Button
              variant="outline"
              className="px-4 py-3 rounded-full border-2 border-foreground font-['Rounded Mplus 1c Bold']"
            >
              {buttonText}
            </Button>
          </Link>
        )
      )}
    </div>
  );
};

export default MainHeadline;