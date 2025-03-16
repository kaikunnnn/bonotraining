type TableOfPointProps = {
  details: string;
};

export default async function TableOfPoint({ details }: TableOfPointProps) {
  return (
    <div className="h-20 px-6 py-5 justify-start items-center gap-2.5 inline-flex overflow-hidden">
      <div className="bg-white rounded-xl justify-start items-center flex">
        <div data-svg-wrapper>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_2399_4533" fill="white">
              <path d="M0 0H40V40H0V0Z" />
            </mask>
            <path
              d="M39 0V40H41V0H39Z"
              fill="#0D0F18"
              fill-opacity="0.1"
              mask="url(#path-1-inside-1_2399_4533)"
            />
            <path
              d="M20 25L13 25"
              stroke="#1E1E22"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27 20H13"
              stroke="#1E1E22"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27 15H13"
              stroke="#1E1E22"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="px-4 justify-center items-center gap-2.5 flex">
          <div className="text-center text-[#0d0f18] text-base font-bold font-['Noto Sans JP'] leading-relaxed tracking-wide">
            グラフィック初級トレーニング
          </div>
        </div>
      </div>
    </div>
  );
}
