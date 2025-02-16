export default function ExerciseDetailPage({
  params,
}: {
  params: { "exercise-id": string };
}) {
  return <h1>お題詳細ページ - ID: {params["exercise-id"]}</h1>;
}
