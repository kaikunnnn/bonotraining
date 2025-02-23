import { Exercise } from "../types";

export const exercisesData: { [key: string]: Exercise } = {
  "exercise-1": {
    id: "exercise-1",
    title: "ToDoサービスをつくろう",
    difficulty: "やさしい",
    description: "グラフィックデザインの基礎から学べるトレーニング",
    category: "UIビジュアル",
    type: "チャレンジ",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyIEyfClNU0SVPqlWPYBvqUG3JjBr-Orm3dw&s",
    stages: [
      { id: 1, title: "説明" },
      { id: 2, title: "説明" },
      { id: 3, title: "説明" },
      { id: 4, title: "説明" },
    ],
    benefits: [
      {
        step: 1,
        title: "選択UIの基本を知ろう",
        subtitle: "秘書業務や実験補助等をしてくれる方を探せます！",
        description:
          "「麻布大学人材バンク」は、研究者が研究時間を確保することを目的に作られました。事務処理業務や研究補助業務等を地域の方や学生にお願いすることにより、研究効率の向上を図れます。",
      },
      {
        step: 2,
        title: "デザインシステムを理解しよう",
        subtitle: "一貫性のあるUIデザインの作り方",
        description:
          "デザインシステムの基本概念と実践的な適用方法について学びます。",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "環境構築",
        subtitle: "開発環境の準備",
        description: "必要なツールのインストールと初期設定を行います。",
      },
      {
        step: 2,
        title: "基本実装",
        subtitle: "コアとなる機能の実装",
        description: "アプリケーションの主要機能を実装していきます。",
      },
    ],
    knowledge: [
      {
        step: 1,
        title: "UIデザインの基礎",
        subtitle: "基本的なデザイン原則",
        description:
          "ユーザーインターフェースデザインの基本原則について学びます。",
      },
      {
        step: 2,
        title: "レイアウトの考え方",
        subtitle: "効果的なレイアウト設計",
        description: "ユーザビリティを考慮したレイアウト設計の方法を学びます。",
      },
    ],
  },
  "exercise-2": {
    id: "exercise-2",
    title: "ポートフォリオサイトを作ろう",
    difficulty: "普通",
    description: "グラフィックデザインの基礎から学べるトレーニング",
    category: "UIビジュアル",
    type: "チャレンジ",
    thumbnail: "https://via.placeholder.com/398x245",
    stages: [
      { id: 1, title: "説明" },
      { id: 2, title: "説明" },
      { id: 3, title: "説明" },
      { id: 4, title: "説明" },
    ],
    benefits: [
      {
        step: 1,
        title: "選択UIの基本を知ろう",
        subtitle: "秘書業務や実験補助等をしてくれる方を探せます！",
        description:
          "「麻布大学人材バンク」は、研究者が研究時間を確保することを目的に作られました。事務処理業務や研究補助業務等を地域の方や学生にお願いすることにより、研究効率の向上を図れます。",
      },
      {
        step: 2,
        title: "デザインシステムを理解しよう",
        subtitle: "一貫性のあるUIデザインの作り方",
        description:
          "デザインシステムの基本概念と実践的な適用方法について学びます。",
      },
    ],
    howTo: [
      {
        step: 1,
        title: "環境構築",
        subtitle: "開発環境の準備",
        description: "必要なツールのインストールと初期設定を行います。",
      },
      {
        step: 2,
        title: "基本実装",
        subtitle: "コアとなる機能の実装",
        description: "アプリケーションの主要機能を実装していきます。",
      },
    ],
    knowledge: [
      {
        step: 1,
        title: "UIデザインの基礎",
        subtitle: "基本的なデザイン原則",
        description:
          "ユーザーインターフェースデザインの基本原則について学びます。",
      },
      {
        step: 2,
        title: "レイアウトの考え方",
        subtitle: "効果的なレイアウト設計",
        description: "ユーザビリティを考慮したレイアウト設計の方法を学びます。",
      },
    ],
  },
};
