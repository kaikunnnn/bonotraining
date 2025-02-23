export default async function ExercisePage({
  params,
}: {
  params: Promise<{ "exercise-id": string; "item-id": string }>;
}) {
  const { "exercise-id": exerciseId, "item-id": itemId } = await params;
  return (
    <div>
      <h1>エクササイズ詳細ページ</h1>
      <p>エクササイズ ID: {exerciseId}</p>
      <p>アイテム ID: {itemId}</p>
    </div>
  );
}
