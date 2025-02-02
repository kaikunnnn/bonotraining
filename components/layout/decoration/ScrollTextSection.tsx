const ScrollTextSection = () => {
  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .scroll-animation {
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
      <div className="w-full py-4 border-t-2 border-b-2 border-black flex-col justify-start items-start gap-2.5 inline-flex overflow-hidden">
        <div className="scroll-animation self-stretch justify-start items-center gap-2 inline-flex">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="justify-center items-center gap-2 flex shrink-0">
              <div className="text-center w-1/2 text-base font-bold font-['Unbounded'] leading-[21.12px]">みんなでデザトレ</div>
              <div className="text-center w-3/4 text-[#1d382f] text-lg font-bold whitespace-nowrap shrink-0">DESIGN TRAINING</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollTextSection;