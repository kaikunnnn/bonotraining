type PageProps = {
  params: Promise<{
    "exercise-id": string;
    "item-id": string;
  }>;
};

export default async function ExerciseItemPage({ params }: PageProps) {
  const { "exercise-id": exerciseId, "item-id": itemId } = await params;
  
  return (
    <div>
      <h1>エクササイズ詳細ページ</h1>
      <p>エクササイズ ID: {exerciseId}</p>
      <p>アイテム ID: {itemId}</p>
    </div>
  );
}
