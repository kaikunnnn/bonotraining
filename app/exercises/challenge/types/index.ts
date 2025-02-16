// 共通の型を定義
export type StepItem = {
    step: number;
    title: string;
    subtitle: string;
    description: string;
};

export type Exercise = {
    id: string;
    title: string;
    difficulty: string;
    description: string;
    category: string;
    type: string;
    thumbnail: string;
    stages: Stage[];
    benefits: StepItem[];    // StepItemを使用
    howTo: StepItem[];      // StepItemを使用
    knowledge: StepItem[];   // StepItemを使用
};

export type Stage = {
    id: number;
    title: string;
};

// 以下の個別の型定義は不要になるため削除
// export type Benefit
// export type HowTo
// export type Knowledge