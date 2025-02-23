type PageProps = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  return <h1>カテゴリ: {category} のお題一覧</h1>;
}
