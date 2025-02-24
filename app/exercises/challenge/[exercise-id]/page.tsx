import { exercisesData } from "../data";
import Link from "next/link";

export default async function ExerciseDetailPage({
  params,
}: {
  params: Promise<{ "exercise-id": string }>;
}) {
  const resolvedParams = await params;
  const exerciseId = resolvedParams["exercise-id"];
  const exercise = exercisesData[exerciseId];

  // 存在しないエクササイズIDの場合のエラーハンドリング
  if (!exercise) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <h1>エクササイズが見つかりませんでした 404</h1>
      </div>
    );
  }

  // 共通のセクションレイアウトコンポーネント
  type SectionProps = {
    label: string;
    title: string;
    items: Array<{
      step: number;
      title: string;
      subtitle: string;
      description: string;
    }>;
  };

  const ContentSection = ({ label, title, items }: SectionProps) => {
    return (
      <div className="w-full mx-auto bg-background rounded-[64px] flex-col justify-center items-center z-0">
        <div className="!w-full max-w-4xl mx-auto px-4 py-14  overflow-hidden">
          <div className="w-full flex-col justify-center items-start gap-8 flex">
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <div className="text-foreground text-base">({label})</div>
                <div className="text-foreground text-2xl md:text-[32px]">
                  {title}
                </div>
              </div>
            </div>
            <div className="w-full border border-dashed border-slate-200"></div>
          </div>
          <div className="w-full pb-7 flex-col justify-center items-start flex">
            {items.map((item, index) => (
              <div
                key={index}
                className="w-full py-8 border-b border-foreground/20 flex flex-col md:flex-row justify-start items-start md:items-center gap-5"
              >
                <div className="w-full md:w-[280px] flex-col justify-start items-start gap-4 flex">
                  <div className="justify-start items-center gap-2 inline-flex">
                    <div className="justify-start items-center gap-2 flex">
                      <div className="text-foreground text-xs">STEP</div>
                    </div>
                    <div className="h-5 justify-start items-center gap-2 flex">
                      <div className="px-3 py-0.5 bg-foreground/10 rounded-2xl flex-col justify-start items-center gap-2.5 inline-flex">
                        <div className="text-foreground text-xs">
                          {String(item.step).padStart(2, "0")}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch text-foreground text-xl md:text-2xl">
                    {item.title}
                  </div>
                </div>
                <div className="w-full md:flex-1 flex-col justify-center items-start gap-5 flex">
                  <div className="w-full text-foreground text-base">
                    {item.subtitle}
                  </div>
                  <div className="w-full text-foreground/80 text-sm">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // 進め方セクション
  const HowToSection = () => {
    return <ContentSection label="HOW" title="進め方" items={exercise.howTo} />;
  };

  // ナレッジセクション
  const KnowledgeSection = () => {
    return (
      <ContentSection
        label="KNOWLEDGE"
        title="ナレッジ"
        items={exercise.knowledge}
      />
    );
  };

  // メリットセクション
  const BenefitsSection = () => {
    return (
      <ContentSection
        label="WHY"
        title="トレーニングのメリット"
        items={exercise.benefits}
      />
    );
  };

  return (
    <>
      <div className="w-full bg-[#fafbf8] ">
        {/* Eyecatch */}
        <div className="w-full min-h-screen px-4 pt-20border-b-4 flex justify-center items-start">
          {/* 背景画像セクション */}
          <div className="fixed inset-0 w-full h-full z-[-1]">
            <div className="w-full h-full grid grid-rows-4 opacity-20">
              <div className="w-full h-full relative">
                <img
                  className="w-full h-full object-cover"
                  src="https://via.placeholder.com/1901x385"
                  alt="background"
                />
              </div>
              <div className="w-full h-full relative">
                <img
                  className="w-full h-full object-cover"
                  src="https://via.placeholder.com/1901x385"
                  alt="background"
                />
              </div>
              <div className="w-full h-full relative">
                <img
                  className="w-full h-full object-cover"
                  src="https://via.placeholder.com/1901x385"
                  alt="background"
                />
              </div>
              <div className="w-full h-full relative">
                <img
                  className="w-full h-full object-cover"
                  src="https://via.placeholder.com/1901x385"
                  alt="background"
                />
              </div>
            </div>
          </div>

          {/* メインコンテンツカード */}
          <div className="relative w-full max-w-4xl mx-auto bg-white rounded-[2rem] md:rounded-[350px] p-8 md:p-12 flex flex-col items-center gap-8 z-0">
            {/* エクササイズ概要セクション */}
            <div className="w-full max-w-[800px] flex flex-col items-center">
              <div className="w-full flex flex-col items-center gap-8">
                <div className="w-full aspect-[1.62] relative mt-4">
                  <img
                    className="w-full h-full object-contain"
                    src={exercise.thumbnail}
                    alt={exercise.title}
                  />
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-[#0d0f18] text-sm font-bold font-['Rounded Mplus 1c Bold'] leading-[14px] tracking-wide">
                    難易度
                  </div>
                  <div className="text-[#0d0f18] text-sm font-bold font-['Rounded Mplus 1c Bold'] leading-[14px] tracking-wide">
                    {exercise.difficulty}
                  </div>
                </div>
                <h1 className="text-center text-[#0d0f18] text-5xl font-bold font-['Rounded Mplus 1c Bold'] leading-[1.4] tracking-wide">
                  {exercise.title}
                </h1>
                <div className="flex flex-col items-center gap-2.5">
                  <div className="text-[#0d0f18] text-base font-normal font-['Rounded Mplus 1c'] leading-relaxed tracking-wide">
                    {exercise.description}
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="justify-start items-center gap-1 flex">
                      <div className="px-1 bg-[#eaf3ef] rounded-md justify-center items-center gap-2.5 flex">
                        <div className="text-center text-[#0d0f18] text-[10px] font-medium font-['Rounded Mplus 1c'] leading-none">
                          カテゴリ
                        </div>
                      </div>
                      <div className="justify-center items-start flex">
                        <div className="text-center text-[#0d0f18] text-sm font-medium font-['Rounded Mplus 1c'] leading-tight">
                          {exercise.category}
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-center gap-1 flex">
                      <div className="px-1 bg-[#eaf3ef] rounded-md justify-center items-center gap-2.5 flex">
                        <div className="text-center text-[#0d0f18] text-[10px] font-medium font-['Rounded Mplus 1c'] leading-none">
                          タイプ
                        </div>
                      </div>
                      <div className="justify-center items-start flex">
                        <div className="text-center text-[#0d0f18] text-sm font-medium font-['Rounded Mplus 1c'] leading-tight">
                          {exercise.type}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col items-center gap-2.5 mt-auto">
                  <Link
                    href={`/exercises/challenge/${exerciseId}/${exercise.stages[0].id}`}
                    className="w-full max-w-sm p-6 bg-[#0d211d] rounded-full border border-[#0d0f18]/90 justify-center items-center gap-2.5 inline-flex"
                  >
                    <div className="text-center text-white text-sm font-bold font-['Rounded Mplus 1c Bold'] leading-[14px] tracking-wide">
                      はじめる
                    </div>
                  </Link>
                  <div className="w-full max-w-sm p-6 rounded-full justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-[#6461ff] text-sm font-bold font-['Rounded Mplus 1c Bold'] underline leading-[14px] tracking-wide">
                      メリットを確認する
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ステージリストセクション */}
            <div className="w-full flex flex-col items-center gap-5">
              <div className="w-full flex flex-col justify-center items-start gap-11">
                <div className="w-full flex flex-col items-start gap-6">
                  <div className="w-full flex flex-col items-start gap-2">
                    <div className="text-[#0d0f18] text-base font-bold font-['Noto Sans JP'] leading-relaxed tracking-wide">
                      (TRY)
                    </div>
                    <div className="text-[#0d0f18] text-[32px] font-bold font-['Noto Sans JP'] leading-[47.68px] tracking-wide">
                      お題リスト
                    </div>
                  </div>
                </div>
                <div className="w-full border border-dashed border-slate-200"></div>
              </div>
              <div className="w-full flex flex-col items-start overflow-hidden">
                {exercise.stages.map((stage, index) => (
                  <div key={index} className="w-full">
                    <Link
                      href={`/exercises/challenge/${exerciseId}/${stage.id}`}
                      className="w-full py-4 hover:bg-slate-50 transition-colors flex items-center gap-8 border-b border-slate-200"
                    >
                      <div className="flex-shrink-0 px-4 py-2 flex flex-col items-center">
                        <div className="text-center text-[#0d211d] text-xs font-normal font-['DotGothic16'] leading-3">
                          STAGE
                        </div>
                        <div className="text-[#0d211d] text-[32px] font-semibold font-['Phudu'] leading-loose">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                      <div className="flex-grow text-[#0d211d] text-xl font-bold font-['Noto Sans JP'] leading-loose tracking-wide">
                        {stage.title}
                      </div>
                      <div className="flex-shrink-0 px-5 flex items-center">
                        <div className="p-2 bg-[#0d211d] rounded-full">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <div className="w-[13.33px] h-[13.33px] pb-[0.20px] origin-top-left -rotate-90 justify-center items-center flex">
                              <div className="w-[9.29px] h-[9.29px] relative origin-top-left rotate-[135deg] flex-col justify-start items-start flex overflow-hidden" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* メリット */}
        <BenefitsSection />
        {/* 進め方 */}
        <HowToSection />
        {/* ナレッジ */}
        <KnowledgeSection />
      </div>
    </>
  );
}
