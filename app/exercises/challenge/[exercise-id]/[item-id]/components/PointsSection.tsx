import { CheckboxIcon } from "./icons/CheckboxIcon";
import { ArrowDownIcon } from "./icons/ArrowDownIcon";

interface PointItem {
  title: string;
  description: string;
}

interface PointsSectionProps {
  points: PointItem[];
}

// PointItemコンポーネントを作成
function PointItem({ title, description }: PointItem) {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-6">
        <div data-svg-wrapper>
          <CheckboxIcon />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-black text-xl font-bold font-['Noto Sans JP'] leading-loose tracking-wide">
            {title}
          </div>
          <div className="text-gray-600 text-sm font-normal font-['Noto Sans'] leading-snug tracking-wide">
            {description}
          </div>
        </div>
      </div>
      <div data-svg-wrapper>
        <ArrowDownIcon />
      </div>
    </div>
  );
}

export default function PointsSection({ points }: PointsSectionProps) {
  return (
    <section className="mb-8">
      {/* Heading */}
      <div className="flex flex-col justify-center items-start gap-6 md:gap-11">
        <div className="w-full flex flex-col justify-start items-start gap-6">
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <div className="text-gray-900 text-base md:text-lg font-bold font-sans leading-relaxed tracking-wide">
              (RULES)
            </div>
            <div className="text-gray-900 text-2xl md:text-3xl font-bold font-sans leading-[1.2] tracking-wide">
              デザトレポイント
            </div>
            <div className="text-gray-600 text-sm md:text-base font-bold font-serif leading-snug tracking-wide">
              これらのことを意識してデザインしてみよう
            </div>
          </div>
        </div>
        <div className="w-full border-t-2 border-gray-700"></div>
      </div>

      {/* 意識するポイント */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="w-full">
          <h3 className="text-gray-900 text-xl font-bold font-['Noto Sans JP'] leading-loose tracking-wide">
            トレーニングで意識する
            <br />
            デザインのポイント
          </h3>
        </div>
        <div className="w-full">
          <div className="w-full py-2 bg-gray-100 rounded-lg">
            {points.map((point, index) => (
              <PointItem
                key={index}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
