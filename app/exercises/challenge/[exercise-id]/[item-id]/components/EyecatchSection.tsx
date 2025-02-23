interface EyecatchSectionProps {
  title: string;
  summary: string;
}

export default function EyecatchSection({
  title,
  summary,
}: EyecatchSectionProps) {
  return (
    <section className="">
      <div className="max-w-lg w-full max-h-[660px] p-6 md:p-10 bg-white rounded-3xl border-2 border-black flex flex-col md:flex-row justify-start items-center gap-10 md:gap-28">
        {/* メインコンテンツ */}
        <div className="flex-1 flex flex-col justify-start items-center gap-10 md:gap-28">
          {/* サブタイトル */}
          <div className="text-center text-[#0d0f18]/80 text-xs md:text-sm font-medium font-['Rounded Mplus 1c'] leading-7">
            サービスの機能を告知する記事に使う
          </div>

          {/* ステージ表示 */}
          <div className="flex flex-col items-center gap-5">
            <div className="w-24 h-24 rounded-xl border border-[#0d0f18]/20 flex flex-col justify-center items-center">
              <div className="text-center text-black text-sm font-bold font-['Phudu'] tracking-widest">
                STAGE
              </div>
              <div className="text-center text-black text-4xl md:text-5xl font-bold font-['Phudu'] leading-[48px]">
                01
              </div>
            </div>

            {/* タイトル & 説明 */}
            <div className="flex flex-col items-center text-center gap-5">
              <div className="text-[#0d0f18] text-2xl md:text-4xl font-medium font-['Rounded Mplus 1c'] leading-[1.3]">
                {title}
              </div>
              <div className="max-w-md text-[#0d0f18]/80 text-base md:text-xl font-medium font-['Rounded Mplus 1c'] leading-7">
                {summary}
              </div>
            </div>

            {/* ボタン */}
            <div className="flex justify-center">
              <div className="px-5 py-2.5 rounded-full border border-[#0d0f18]/60 flex justify-center items-center">
                <div className="text-center text-[#171823] text-sm font-bold font-['Noto Sans JP'] leading-7 tracking-widest">
                  お題の詳細を見る
                </div>
              </div>
            </div>
          </div>

          {/* フッター */}
          <div className="text-center text-[#0d0f18]/80 text-xs md:text-sm font-medium font-['Rounded Mplus 1c'] leading-7">
            「チャレンジの名前」がここにくる
          </div>
        </div>
      </div>
    </section>
  );
}
