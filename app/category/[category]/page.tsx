export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  return <h1>カテゴリ: {params.category} のお題一覧</h1>;
}
