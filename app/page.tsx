import { AnimatedHero } from "@/components/layout/hero/animated-hero";
import MainHeadline from "@/components/layout/headline/MainHeadline";
import ScrollTextSection from "@/components/layout/decoration/ScrollTextSection";
import ObjectChallenge from "@/components/exercises/Challenges/ObjectChallenge";
import NormalHeadline from "@/components/layout/headline/NormalHeadline";
import ObjectPractice from "@/components/exercises/Practises/ObjectPractice";
import { exercisesData } from "./exercises/challenge/data";
import { OdaiChallenge } from "@/components/exercises/Challenges/Odai-Challenge";

export default function HomePage() {
  return (
    <>
      {/* TOPページ専用のHero */}
      <AnimatedHero />

      <div className="Challenge container mx-auto py-20 flex flex-col gap-10">
        {/* メインの見出しと説明 */}
        <MainHeadline
          mainTitle={{ first: "デザインチャレンジ", second: "" }}
          description="デザインスキルのテーマに沿った「デザインお題」にチャレンジするトレーニング!!"
          showButton={false}
          buttonText="aaa"
        />

        {/* チャレンジの一覧 */}

        <div className="flex flex-wrap items-start justify-center gap-32 relative w-full">
          {/* OdaiChallengeコンポーネントをexercisesDataを使用して表示 */}
          {Object.values(exercisesData)
            .filter(exercise => exercise.type === "チャレンジ") // 必要に応じてフィルタリング
            .map((exercise) => (
              <OdaiChallenge
                key={exercise.id}
                exerciseId={exercise.id}
                title={exercise.title}
                difficulty={exercise.difficulty}
                description={exercise.description}
                trainingPart={{ visual: exercise.category }}
                trainingType={exercise.type}
                thumbnail={exercise.thumbnail}
                bgblur={exercise.bgblur}
                isFree={false}
                buttonText="トレーニングを見る"
              />
            ))}
        </div>
      </div>
      {/* WaveBorder */}
      <div className="w-full">
        <img
          src="/wave-border.svg"
          alt="Wave Border"
          className="w-full h-auto"
        />
      </div>

      <div className="Challenge container mx-auto py-20 flex flex-col gap-10">
        {/* メインの見出しと説明 */}
        <MainHeadline
          mainTitle={{ first: "“スキル”の筋トレ!", second: "" }}
          description="伸ばしたいスキルに合わせたトレーニング"
          showButton={false}
          buttonText="aaa"
        />

        {/* チャレンジの一覧 */}

        <div className="flex flex-wrap items-start justify-center gap-32 relative w-full">
          {/* OdaiChallengeコンポーネントをexercisesDataを使用して表示 */}
          {Object.values(exercisesData)
            .filter(exercise => exercise.type === "チャレンジ") // 必要に応じてフィルタリング
            .map((exercise) => (
              <OdaiChallenge
                key={exercise.id}
                exerciseId={exercise.id}
                title={exercise.title}
                difficulty={exercise.difficulty}
                description={exercise.description}
                trainingPart={{ visual: exercise.category }}
                trainingType={exercise.type}
                thumbnail={exercise.thumbnail}
                bgblur={exercise.bgblur}
                isFree={false}
                buttonText="トレーニングを見る"
              />
            ))}
        </div>
      </div>

      {/* スキルトレーニングのセクション
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
      </div> */}
    </>
  );
}
