import { FC } from "react";
import Link from "next/link";
import ObjectChallengeProps from "./ObjectChallenge.types";

const ObjectChallenge: FC<ObjectChallengeProps> = ({
  title,
  difficulty,
  description,
  trainingPart,
  trainingType,
  isFree,
  buttonText,
  exerciseId,
}) => {
  return (
    <Link
      href={`/exercises/challenge/${exerciseId}`}
      className="block hover:opacity-80 transition-opacity"
    >
      <div className="flex-col justify-start items-start gap-4 inline-flex">
        <div className="Thumbnail relative bg-zinc-100 w-full h-[560px] rounded-[132px]">
          {isFree && (
            <div className="Muryo absolute top-4 right-4 w-14 h-14">
              <div className="left-[15.09px] top-[15px] absolute origin-top-left rotate-6 text-slate-950 text-sm font-normal font-['Inter'] leading-tight">
                無料
              </div>
              <div className="left-[15.80px] top-[34.41px] absolute origin-top-left rotate-6 text-slate-950 text-[3px] font-normal font-['Inter'] leading-[4.20px]">
                むりょうくうしょ
              </div>
            </div>
          )}
        </div>
        <div className="self-stretch h-[195px] flex-col justify-start items-start gap-[11px] flex">
          <div className="self-stretch h-[87px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch h-[60px] flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="text-[#1d283d] text-sm font-bold font-['Rounded Mplus 1c Bold'] leading-[14px] tracking-wide">
                  難易度
                </div>
                <div className="text-[#1d283d] text-sm font-bold font-['Rounded Mplus 1c Bold'] leading-[14px] tracking-wide">
                  {difficulty}
                </div>
              </div>
              <div className="self-stretch h-[42px] flex-col justify-start items-start flex">
                <div className="self-stretch text-slate-950 text-[28px] font-bold font-['Rounded Mplus 1c Bold'] leading-[41.72px] tracking-wide">
                  {title}
                </div>
              </div>
            </div>
            <div className="self-stretch text-[#1d283d] text-xs font-normal font-['Rounded Mplus 1c'] leading-tight tracking-wide">
              {description}
            </div>
          </div>
          <div className="h-11 flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch justify-start items-center gap-1 inline-flex">
              <div className="px-1 bg-slate-100 rounded-md justify-center items-center gap-2.5 flex">
                <div className="text-center text-[#1d283d] text-[10px] font-medium font-['Rounded Mplus 1c'] leading-none">
                  筋トレ部位
                </div>
              </div>
              <div className="justify-center items-start flex">
                <div className="text-center text-[#1d283d] text-sm font-medium font-['Rounded Mplus 1c'] leading-tight">
                  {trainingPart.visual}
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-1 inline-flex">
              <div className="px-1 bg-slate-100 rounded-md justify-center items-center gap-2.5 flex">
                <div className="text-center text-[#1d283d] text-[10px] font-medium font-['Rounded Mplus 1c'] leading-none">
                  トレタイプ
                </div>
              </div>
              <div className="justify-center items-start flex">
                <div className="text-center text-[#1d283d] text-sm font-medium font-['Rounded Mplus 1c'] leading-tight">
                  {trainingType}
                </div>
              </div>
            </div>
          </div>
          <div className="px-[15px] py-2.5 rounded-full border border-slate-950 justify-center items-center gap-2.5 inline-flex">
            <div className="text-slate-950 text-sm font-extrabold font-['Rounded Mplus 1c'] leading-snug tracking-wide">
              {buttonText}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ObjectChallenge;
