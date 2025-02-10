export type Exercise = {
    id: string;
    title: string;
    difficulty: string;
    description: string;
    category: string;
    type: string;
    imageUrl: string;
    stages: Stage[];
    benefits: Benefit[];
    howTo: HowTo[];
    knowledge: Knowledge[];
};

export type Stage = {
    id: number;
    title: string;
};

export type Benefit = {
    step: number;
    title: string;
    subtitle: string;
    description: string;
};

export type HowTo = {
    step: number;
    title: string;
    subtitle: string;
    description: string;
};

export type Knowledge = {
    step: number;
    title: string;
    subtitle: string;
    description: string;
};