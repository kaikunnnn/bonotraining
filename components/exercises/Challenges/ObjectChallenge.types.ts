interface ObjectChallengeProps {
  title: string; // "SNSアプリをつくろう"
  difficulty: string; // "やさしい"
  description: string; // "グラフィックデザインの基礎から学べるトレーニング"
  trainingPart: {
    // 筋トレ部位
    visual: string; // "UIビジュアル"
  };
  trainingType: string; // "チャレンジ"
  isFree: boolean; // 無料表示の有無
  buttonText: string; // "トレーニングを見る"
  exerciseId: string; // 新しく追加した型定義
}

export default ObjectChallengeProps;
