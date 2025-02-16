export default function ExercisePage({
  params,
}: {
  params: { "exercise-id": string; "item-id": string };
}) {
  return (
    <div>
      <h1>エクササイズ詳細ページ</h1>
      <p>エクササイズ ID: {params["exercise-id"]}</p>
      <p>アイテム ID: {params["item-id"]}</p>
    </div>
  );
}
