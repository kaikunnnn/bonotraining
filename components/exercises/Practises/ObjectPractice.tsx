import { ObjectPracticeProps } from './ObjectPractice.types';

const ObjectPractice: React.FC<ObjectPracticeProps> = ({
  title,
  description,
  isFree,
  category,
  type
}) => {
  return (
    <div className="h-[370px] rounded-lg flex-col justify-start items-start gap-4 inline-flex">
      <div className="w-[387.56px] h-[218px] pl-[308px] pr-[31.56px] pt-6 pb-[154px] bg-zinc-100 rounded-[75.09px] justify-end items-center inline-flex overflow-hidden">
        <div className="w-12 self-stretch p-2.5 bg-white rounded-[20px] flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="text-[#a1a1a1] text-sm font-normal font-['Inter'] leading-tight">
              {isFree ? "無料" : "有料"}
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[76px] flex-col justify-start items-start gap-1 flex">
        <div className="self-stretch justify-start items-start inline-flex">
          <div className="grow shrink basis-0 text-slate-950 text-xl font-bold font-['Rounded Mplus 1c Bold'] leading-7">
            {title}
          </div>
        </div>
        <div className="self-stretch justify-start items-start inline-flex">
          <div className="grow shrink basis-0 text-[#1d283d] text-base font-normal font-['Rounded Mplus 1c'] leading-snug">
            {description}
          </div>
        </div>
      </div>
      <div className="w-[362px] h-11 flex-col justify-start items-start gap-1 flex">
        <div className="self-stretch justify-start items-center gap-1 inline-flex">
          <div className="px-1 bg-slate-100 rounded-md justify-center items-center gap-2.5 flex">
            <div className="text-center text-[#0d0f18] text-[10px] font-medium font-['Rounded Mplus 1c'] leading-none">カテゴリ</div>
          </div>
          <div className="text-center text-[#1d283d] text-sm font-medium font-['Rounded Mplus 1c'] leading-tight">
            {category.name}
          </div>
        </div>
        <div className="self-stretch justify-start items-center gap-1 inline-flex">
          <div className="px-1 bg-slate-100 rounded-md justify-center items-center gap-2.5 flex">
            <div className="text-center text-[#0d0f18] text-[10px] font-medium font-['Rounded Mplus 1c'] leading-none">タイプ</div>
          </div>
          <div className="text-center text-[#1d283d] text-sm font-medium font-['Rounded Mplus 1c'] leading-tight">
            {type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectPractice;