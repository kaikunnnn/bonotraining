export interface ObjectPracticeProps {
  title: string;            // "UIデザイン見た目の基本"
  description: string;      // "トレースをしながらオートレイアウトとコンポーネント..."
  isFree: boolean;         // "無料"表示のため
  category: {
    name: string;          // "UIビジュアル"
  };
  type: string;            // "トレーニング"
}

export interface ObjectPracticeSectionProps {
  headline: {
    englishTitle: string;  // "Nanka Kakkoii Eigo"
    japaneseTitle: string; // "スキル特化トレーニング"
  };
  cards: ObjectPracticeProps[];
}