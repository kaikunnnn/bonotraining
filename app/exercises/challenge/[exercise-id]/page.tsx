import { exercisesData } from '../data';

export default function ExerciseDetailPage({
  params,
}: {
  params: { "exercise-id": string };
}) {
  const exercise = exercisesData[params["exercise-id"]];

  // 存在しないエクササイズIDの場合のエラーハンドリング
  if (!exercise) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <h1>エクササイズが見つかりませんでした</h1>
      </div>
    );
  }

  return (
    <>
      {/* メインコンテナ */}
      <div className="w-full min-h-screen px-4 pt-20 bg-[#fafbf8] border-b-4 flex justify-center items-start">
        {/* 背景画像セクション */}
        <div className="fixed inset-0 w-full h-full z-0">
          <div className="w-full h-full grid grid-rows-4 opacity-20">
            <div className="w-full h-full relative">
              <img className="w-full h-full object-cover" src="https://via.placeholder.com/1901x385" alt="background" />
            </div>
            <div className="w-full h-full relative">
              <img className="w-full h-full object-cover" src="https://via.placeholder.com/1901x385" alt="background" />
            </div>
            <div className="w-full h-full relative">
              <img className="w-full h-full object-cover" src="https://via.placeholder.com/1901x385" alt="background" />
            </div>
            <div className="w-full h-full relative">
              <img className="w-full h-full object-cover" src="https://via.placeholder.com/1901x385" alt="background" />
            </div>
          </div>
        </div>

        {/* メインコンテンツカード */}
        <div className="relative w-full max-w-4xl mx-auto bg-white rounded-[2rem] md:rounded-[350px] p-8 md:p-12 flex flex-col items-center gap-8 z-10">
          {/* エクササイズ概要セクション */}
          <div className="w-full max-w-[800px] flex flex-col items-center">

            <div className="w-full flex flex-col items-center gap-8">
              <div className="w-full aspect-[1.62] relative mt-4">
                <img className="w-full h-full object-contain" src="https://via.placeholder.com/398x245" />
              </div>
              <div className="flex items-start gap-2">
                <div className="text-[#0d0f18] text-sm font-bold font-['Rounded Mplus 1c Bold'] leading-[14px] tracking-wide">難易度</div>
                <div className="text-[#0d0f18] text-sm font-bold font-['Rounded Mplus 1c Bold'] leading-[14px] tracking-wide">やさしい</div>
              </div>
              <h1 className="text-center text-[#0d0f18] text-5xl font-bold font-['Rounded Mplus 1c Bold'] leading-[1.4] tracking-wide">
                ID: {params["exercise-id"]}ToDoサービスをつくろう</h1>
              <div className="flex flex-col items-center gap-2.5">
                <div className="text-[#0d0f18] text-base font-normal font-['Rounded Mplus 1c'] leading-relaxed tracking-wide">グラフィックデザインの基礎から学べるトレーニング</div>
                <div className="flex items-center gap-5">
                  <div className="justify-start items-center gap-1 flex">
                    <div className="px-1 bg-[#eaf3ef] rounded-md justify-center items-center gap-2.5 flex">
                      <div className="text-center text-[#0d0f18] text-[10px] font-medium font-['Rounded Mplus 1c'] leading-none">カテゴリ</div>
                    </div>
                    <div className="justify-center items-start flex">
                      <div className="text-center text-[#0d0f18] text-sm font-semibold font-['Inter'] leading-tight">UI</div>
                      <div className="text-center text-[#0d0f18] text-sm font-medium font-['Rounded Mplus 1c'] leading-tight">ビジュアル</div>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1 flex">
                    <div className="px-1 bg-[#eaf3ef] rounded-md justify-center items-center gap-2.5 flex">
                      <div className="text-center text-[#0d0f18] text-[10px] font-medium font-['Rounded Mplus 1c'] leading-none">タイプ</div>
                    </div>
                    <div className="justify-center items-start flex">
                      <div className="text-center text-[#0d0f18] text-sm font-medium font-['Rounded Mplus 1c'] leading-tight">チャレンジ</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center gap-2.5 mt-auto">
                <div className="w-full max-w-sm p-6 bg-[#0d211d] rounded-full border border-[#0d0f18]/90 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-center text-white text-sm font-bold font-['Rounded Mplus 1c Bold'] leading-[14px] tracking-wide">はじめる</div>
                </div>
                <div className="w-full max-w-sm p-6 rounded-full justify-center items-center gap-2.5 inline-flex">
                  <div className="text-center text-[#6461ff] text-sm font-bold font-['Rounded Mplus 1c Bold'] underline leading-[14px] tracking-wide">メリットを確認する</div>
                </div>
              </div>
            </div>

          </div>

          {/* ステージリストセクション */}
          <div className="w-full flex flex-col items-center gap-5">
            <div className="w-full flex flex-col justify-center items-start gap-11">
              <div className="w-full flex flex-col items-start gap-6">
                <div className="w-full flex flex-col items-start gap-2">
                  <div className="text-[#0d0f18] text-base font-bold font-['Noto Sans JP'] leading-relaxed tracking-wide">(TRY)</div>
                  <div className="text-[#0d0f18] text-[32px] font-bold font-['Noto Sans JP'] leading-[47.68px] tracking-wide">お題リスト</div>
                </div>
              </div>
              <div className="w-full border-2 border-slate-700"></div>
            </div>
            <div className="w-full flex flex-col items-start overflow-hidden border">
              <div className="w-full py-4 border-b border-[#0d0f18]/20 flex items-center gap-8">
                <div className="flex-shrink-0 px-4 py-2 flex flex-col items-center">
                  <div className="text-center text-[#0d211d] text-xs font-normal font-['DotGothic16'] leading-3">STAGE</div>
                  <div className="text-[#0d211d] text-[32px] font-semibold font-['Phudu'] leading-loose">01</div>
                </div>
                <div className="flex-grow text-[#0d211d] text-xl font-bold font-['Noto Sans JP'] leading-loose tracking-wide">説明</div>
                <div className="flex-shrink-0 px-5 flex items-center">
                  <div className="p-2 bg-[#0d211d] rounded-full">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <div className="w-[13.33px] h-[13.33px] pb-[0.20px] origin-top-left -rotate-90 justify-center items-center flex">
                        <div className="w-[9.29px] h-[9.29px] relative origin-top-left rotate-[135deg] flex-col justify-start items-start flex overflow-hidden" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-4 border-b border-[#0d0f18]/20 flex items-center gap-8">
                <div className="flex-shrink-0 px-4 py-2 flex flex-col items-center">
                  <div className="text-center text-[#0d211d] text-xs font-normal font-['DotGothic16'] leading-3">STAGE</div>
                  <div className="text-[#0d211d] text-[32px] font-semibold font-['Phudu'] leading-loose">02</div>
                </div>
                <div className="flex-grow text-[#0d211d] text-xl font-bold font-['Noto Sans JP'] leading-loose tracking-wide">説明</div>
                <div className="flex-shrink-0 px-5 flex items-center">
                  <div className="p-2 bg-[#0d211d] rounded-full">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <div className="w-[13.33px] h-[13.33px] pb-[0.20px] origin-top-left -rotate-90 justify-center items-center flex">
                        <div className="w-[9.29px] h-[9.29px] relative origin-top-left rotate-[135deg] flex-col justify-start items-start flex overflow-hidden" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-4 border-b border-[#0d0f18]/20 flex items-center gap-8">
                <div className="flex-shrink-0 px-4 py-2 flex flex-col items-center">
                  <div className="text-center text-[#0d211d] text-xs font-normal font-['DotGothic16'] leading-3">STAGE</div>
                  <div className="text-[#0d211d] text-[32px] font-semibold font-['Phudu'] leading-loose">03</div>
                </div>
                <div className="flex-grow text-[#0d211d] text-xl font-bold font-['Noto Sans JP'] leading-loose tracking-wide">説明</div>
                <div className="flex-shrink-0 px-5 flex items-center">
                  <div className="p-2 bg-[#0d211d] rounded-full">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <div className="w-[13.33px] h-[13.33px] pb-[0.20px] origin-top-left -rotate-90 justify-center items-center flex">
                        <div className="w-[9.29px] h-[9.29px] relative origin-top-left rotate-[135deg] flex-col justify-start items-start flex overflow-hidden" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-4 border-b border-[#0d0f18]/20 flex items-center gap-8">
                <div className="flex-shrink-0 px-4 py-2 flex flex-col items-center">
                  <div className="text-center text-[#0d211d] text-xs font-normal font-['DotGothic16'] leading-3">STAGE</div>
                  <div className="text-[#0d211d] text-[32px] font-semibold font-['Phudu'] leading-loose">04</div>
                </div>
                <div className="flex-grow text-[#0d211d] text-xl font-bold font-['Noto Sans JP'] leading-loose tracking-wide">説明</div>
                <div className="flex-shrink-0 px-5 flex items-center">
                  <div className="p-2 bg-[#0d211d] rounded-full">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <div className="w-[13.33px] h-[13.33px] pb-[0.20px] origin-top-left -rotate-90 justify-center items-center flex">
                        <div className="w-[9.29px] h-[9.29px] relative origin-top-left rotate-[135deg] flex-col justify-start items-start flex overflow-hidden" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* メリット */}
      <div className="w-full max-w-[1440px] px-4 md:px-10 py-14 md:py-28 bg-white rounded-3xl md:rounded-[67px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border flex-col justify-start items-center gap-2.5 mx-auto">
        <div className="w-full flex-col justify-start items-center gap-1 flex">
          <div className="w-full flex-col justify-center items-start gap-8 md:gap-11 flex">
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <div className="text-[#0d0f18] text-base font-bold font-['Noto Sans JP'] leading-relaxed tracking-wide">(WHY)</div>
                <div className="text-[#0d0f18] text-2xl md:text-[32px] font-bold font-['Noto Sans JP'] leading-normal md:leading-[47.68px] tracking-wide">トレーニングのメリット</div>
              </div>
            </div>
            <div className="w-full border-2 border-slate-700"></div>
          </div>
          <div className="w-full pb-7 flex-col justify-center items-start flex">
            <div className="w-full py-8 md:py-12 border-b border-[#0d0f18]/20 flex flex-col md:flex-row justify-start items-start md:items-center gap-5">
              <div className="w-full md:w-[280px] flex-col justify-start items-start gap-4 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="text-[#0d0f18] text-xs font-bold font-['Inter'] leading-none">STEP</div>
                  </div>
                  <div className="h-5 justify-start items-center gap-2 flex">
                    <div className="px-3 py-0.5 bg-[#0d0f18]/10 rounded-2xl flex-col justify-start items-center gap-2.5 inline-flex">
                      <div className="text-[#0d0f18] text-xs font-bold font-['Inter'] leading-none">01</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-[#0d0f18] text-xl md:text-2xl font-bold font-['Inter'] leading-loose">選択UIの基本を知ろう</div>
              </div>
              <div className="w-full md:flex-1 flex-col justify-center items-start gap-5 flex">
                <div className="w-full text-[#0d0f18] text-base font-bold font-['Noto Sans JP'] leading-relaxed tracking-wide">秘書業務や実験補助等をしてくれる方を探せます！</div>
                <div className="w-full text-[#0d0f18]/80 text-sm font-normal font-['Noto Sans'] leading-snug tracking-wide">「麻布大学人材バンク」は、研究者が研究時間を確保することを目的に作られました。事務処理業務や研究補助業務等を地域の方や学生にお願いすることにより、研究効率の向上を図れます。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 進め方 */}
      <div className="w-full max-w-[1440px] px-4 md:px-10 py-14 md:py-28 bg-white rounded-3xl md:rounded-[67px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border flex-col justify-start items-center gap-2.5 mx-auto">
        <div className="w-full flex-col justify-start items-center gap-1 flex">
          <div className="w-full flex-col justify-center items-start gap-8 md:gap-11 flex">
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <div className="text-[#0d0f18] text-base font-bold font-['Noto Sans JP'] leading-relaxed tracking-wide">(WHY)</div>
                <div className="text-[#0d0f18] text-2xl md:text-[32px] font-bold font-['Noto Sans JP'] leading-normal md:leading-[47.68px] tracking-wide">進め方</div>
              </div>
            </div>
            <div className="w-full border-2 border-slate-700"></div>
          </div>
          <div className="w-full pb-7 flex-col justify-center items-start flex">
            <div className="w-full py-8 md:py-12 border-b border-[#0d0f18]/20 flex flex-col md:flex-row justify-start items-start md:items-center gap-5">
              <div className="w-full md:w-[280px] flex-col justify-start items-start gap-4 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="text-[#0d0f18] text-xs font-bold font-['Inter'] leading-none">STEP</div>
                  </div>
                  <div className="h-5 justify-start items-center gap-2 flex">
                    <div className="px-3 py-0.5 bg-[#0d0f18]/10 rounded-2xl flex-col justify-start items-center gap-2.5 inline-flex">
                      <div className="text-[#0d0f18] text-xs font-bold font-['Inter'] leading-none">01</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-[#0d0f18] text-xl md:text-2xl font-bold font-['Inter'] leading-loose">選択UIの基本を知ろう</div>
              </div>
              <div className="w-full md:flex-1 flex-col justify-center items-start gap-5 flex">
                <div className="w-full text-[#0d0f18] text-base font-bold font-['Noto Sans JP'] leading-relaxed tracking-wide">秘書業務や実験補助等をしてくれる方を探せます！</div>
                <div className="w-full text-[#0d0f18]/80 text-sm font-normal font-['Noto Sans'] leading-snug tracking-wide">「麻布大学人材バンク」は、研究者が研究時間を確保することを目的に作られました。事務処理業務や研究補助業務等を地域の方や学生にお願いすることにより、研究効率の向上を図れます。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ナレッジ */}
      <div className="w-full max-w-[1440px] px-4 md:px-10 py-14 md:py-28 bg-white rounded-3xl md:rounded-[67px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border flex-col justify-start items-center gap-2.5 mx-auto">
        <div className="w-full flex-col justify-start items-center gap-1 flex">
          <div className="w-full flex-col justify-center items-start gap-8 md:gap-11 flex">
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <div className="w-full flex-col justify-start items-start gap-2 flex">
                <div className="text-[#0d0f18] text-base font-bold font-['Noto Sans JP'] leading-relaxed tracking-wide">(WHY)</div>
                <div className="text-[#0d0f18] text-2xl md:text-[32px] font-bold font-['Noto Sans JP'] leading-normal md:leading-[47.68px] tracking-wide">ナレッジ</div>
              </div>
            </div>
            <div className="w-full border-2 border-slate-700"></div>
          </div>
          <div className="w-full pb-7 flex-col justify-center items-start flex">
            <div className="w-full py-8 md:py-12 border-b border-[#0d0f18]/20 flex flex-col md:flex-row justify-start items-start md:items-center gap-5">
              <div className="w-full md:w-[280px] flex-col justify-start items-start gap-4 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="text-[#0d0f18] text-xs font-bold font-['Inter'] leading-none">STEP</div>
                  </div>
                  <div className="h-5 justify-start items-center gap-2 flex">
                    <div className="px-3 py-0.5 bg-[#0d0f18]/10 rounded-2xl flex-col justify-start items-center gap-2.5 inline-flex">
                      <div className="text-[#0d0f18] text-xs font-bold font-['Inter'] leading-none">01</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-[#0d0f18] text-xl md:text-2xl font-bold font-['Inter'] leading-loose">選択UIの基本を知ろう</div>
              </div>
              <div className="w-full md:flex-1 flex-col justify-center items-start gap-5 flex">
                <div className="w-full text-[#0d0f18] text-base font-bold font-['Noto Sans JP'] leading-relaxed tracking-wide">秘書業務や実験補助等をしてくれる方を探せます！</div>
                <div className="w-full text-[#0d0f18]/80 text-sm font-normal font-['Noto Sans'] leading-snug tracking-wide">「麻布大学人材バンク」は、研究者が研究時間を確保することを目的に作られました。事務処理業務や研究補助業務等を地域の方や学生にお願いすることにより、研究効率の向上を図れます。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
