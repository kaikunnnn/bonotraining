import { AnimatedHero } from "@/components/layout/hero/animated-hero";
import MainHeadline from "@/components/layout/headline/MainHeadline";
import ScrollTextSection from "@/components/layout/decoration/ScrollTextSection";
import ObjectChallenge from "@/components/exercises/Challenges/ObjectChallenge";
import NormalHeadline from "@/components/layout/headline/NormalHeadline";
import ObjectPractice from "@/components/exercises/Practises/ObjectPractice";
import { exercisesData } from "./exercises/challenge/data";

export default function HomePage() {
  return (
    <>
      {/* TOPページ専用のHero */}
      <AnimatedHero />

      {/* メインの見出しと説明 */}
      <MainHeadline
        mainTitle={{ first: "みんなで", second: "デザトレ" }}
        description="SNS情報ばっかり見て肩こわばってない？そうだ！デザイン筋を鍛える旅に出かけようっ！"
        buttonText="使い方を見る"
      />

      {/* チャレンジの一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
        {Object.values(exercisesData).map((exercise) => (
          <ObjectChallenge
            key={exercise.id}
            exerciseId={exercise.id}
            title={exercise.title}
            difficulty={exercise.difficulty}
            description={exercise.description}
            trainingPart={{ visual: exercise.category }}
            trainingType={exercise.type}
            isFree={false}
            buttonText="トレーニングを見る"
          />
        ))}
      </div>

      {/* スクロールテキストの装飾 */}
      <ScrollTextSection />

      {/* スキルトレーニングのセクション */}
      <div>
        <NormalHeadline
          englishTitle="Nanka Kakkoii Eigo"
          japaneseTitle="スキル特化トレーニング"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
          <ObjectPractice
            title="SNSアプリをつくろう"
            description="グラフィックデザインの基礎から学べるトレーニング"
            isFree={false}
            category={{ name: "UIビジュアル" }}
            type="チャレンジ"
          />
          <ObjectPractice
            title="アプリをつくろう"
            description="グラフィックデザインの基礎から学べるトレーニング"
            isFree={false}
            category={{ name: "UIビジュアル" }}
            type="チャレンジ"
          />
          <ObjectPractice
            title="SNSアプリをつくろう"
            description="グラフィックデザインの基礎から学べるトレーニング"
            isFree={false}
            category={{ name: "UIビジュアル" }}
            type="チャレンジ"
          />
        </div>
      </div>
    </>
  );
}
