import EyecatchSection from "./components/EyecatchSection";
import PointsSection from "./components/PointsSection";
import DetailSection from "./components/DetailSection";
import TableOfPoint from "./components/tableofpoint";
import { exerciseItems } from "../data/items";

export default async function ExercisePage({
  params,
}: {
  params: Promise<{ "exercise-id": string; "item-id": string }>;
}) {
  const { "exercise-id": exerciseId, "item-id": itemId } = await params;

  // データの取得
  const exerciseData = exerciseItems[exerciseId]?.[itemId];

  // データが存在しない場合のエラーハンドリング
  if (!exerciseData) {
    throw new Error("Exercise data not found");
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <TableOfPoint details={exerciseData.details} />
      <EyecatchSection
        title={exerciseData.title}
        summary={exerciseData.summary}
      />
      <PointsSection points={exerciseData.points} />
      <DetailSection details={exerciseData.details} />
    </div>
  );
}
