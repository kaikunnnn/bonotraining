export default async function ExerciseDetailPage({
  params,
}: {
  params: Promise<{ "exercise-id": string }>;
}) {
  const { "exercise-id": exerciseId } = await params;
  return <h1>お題詳細ページ - ID: {exerciseId}</h1>;
}
