import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import ObjectChallengeProps from "./ObjectChallenge.types";
import Image from 'next/image';

// ObjectChallengePropsを拡張して画像関連のプロパティを追加
interface OdaiChallengeProps extends ObjectChallengeProps {
    thumbnail: string;
    bgblur: string;
}

export const OdaiChallenge = ({
    title,
    difficulty,
    description,
    trainingPart,
    trainingType,
    isFree,
    buttonText,
    exerciseId,
    thumbnail,
    bgblur,
}: OdaiChallengeProps): JSX.Element => {
    console.log("サムネイルパス:", thumbnail); // デバッグ用

    return (
        <Link
            href={`/exercises/challenge/${exerciseId}`}
            className="block hover:opacity-80 transition-opacity"
        >
            <Card className="flex flex-col w-[393.4px] items-start gap-6 relative">
                {/* Image container with rounded top */}
                <div className="flex flex-col items-center justify-center gap-2.5 pt-16 pb-8 px-0 relative self-stretch w-full border-2 border-gray-700 rounded-[160px_160px_32px_32px] overflow-hidden">
                    {/* Blurred background image */}
                    <div className="absolute w-full h-[638px] top-0 left-[-282px]">
                        <img
                            className="left-[282px] blur-[8.89px] absolute w-[393px] h-[434px] top-0 object-cover"
                            alt="Background image"
                            src={bgblur}
                        />
                    </div>

                    {/* Main design image */}
                    <div className="relative w-[379px] h-[337.83px] ">
                        <Image
                            src={thumbnail}
                            alt="チャレンジサムネイル"
                            width={379}
                            height={338}
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <CardContent className="flex flex-col items-start gap-[11px] p-0 w-full">
                    {/* Title and description */}
                    <div className="gap-2 self-stretch w-full flex flex-col items-start">
                        <div className="flex flex-col items-start gap-1 self-stretch w-full">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Rounded_Mplus_1c_Bold-Bold',Helvetica] font-bold text-[#1d283d] text-sm tracking-[0.75px] leading-[14px] whitespace-nowrap">
                                チャレンジ
                            </div>

                            <h2 className="self-stretch [font-family:'Rounded_Mplus_1c_Bold-Bold',Helvetica] text-slate-950 text-[28px] tracking-[0.75px] leading-[41.7px] font-bold">
                                {title}
                            </h2>
                        </div>

                        <p className="self-stretch [font-family:'Rounded_Mplus_1c-Regular',Helvetica] font-normal text-[#1d283d] text-xs tracking-[1.00px] leading-[19.2px]">
                            {description}
                        </p>
                    </div>

                    {/* Training details */}
                    <div className="w-full gap-1 flex flex-col items-start">
                        <div className="flex items-center gap-1 self-stretch w-full">
                            <Badge
                                variant="outline"
                                className="flex w-[60px] items-center justify-center px-1 py-0 bg-slate-100 rounded-md"
                            >
                                <span className="[font-family:'Rounded_Mplus_1c-Medium',Helvetica] font-medium text-[#1d283d] text-[10px] text-center leading-4">
                                    筋トレ部位
                                </span>
                            </Badge>

                            <span className="font-[number:var(--text-sm-font-semibold-font-weight)] text-[#1d283d] text-[length:var(--text-sm-font-semibold-font-size)] leading-[var(--text-sm-font-semibold-line-height)] font-text-sm-font-semibold tracking-[var(--text-sm-font-semibold-letter-spacing)]">
                                {trainingPart?.visual || ''}
                            </span>
                        </div>

                        <div className="flex items-center gap-1 self-stretch w-full">
                            <Badge
                                variant="outline"
                                className="flex w-[60px] items-center justify-center px-1 py-0 bg-slate-100 rounded-md"
                            >
                                <span className="[font-family:'Rounded_Mplus_1c-Medium',Helvetica] font-medium text-[#1d283d] text-[10px] text-center leading-4">
                                    難易度
                                </span>
                            </Badge>

                            <span className="font-[number:var(--text-sm-font-semibold-font-weight)] text-[#1d283d] text-[length:var(--text-sm-font-semibold-font-size)] leading-[var(--text-sm-font-semibold-line-height)] font-text-sm-font-semibold tracking-[var(--text-sm-font-semibold-letter-spacing)]">
                                {difficulty}
                            </span>
                        </div>
                    </div>

                    {/* View training button */}
                    <Button
                        variant="outline"
                        className="w-full items-center justify-center gap-2.5 px-[15px] py-2.5 rounded-[1000px] border border-solid border-slate-950"
                    >
                        <span className="[font-family:'Rounded_Mplus_1c-ExtraBold',Helvetica] font-extrabold text-slate-950 text-sm tracking-[0.75px] leading-[22.4px]">
                            {buttonText}
                        </span>
                    </Button>
                </CardContent>

                {/* Free badge */}
                {isFree && (
                    <div className="absolute w-14 h-14 top-[17px] right-[14px]">
                        <div
                            className="relative w-[52px] h-[54px] top-px left-0.5"
                            style={{
                                backgroundImage: "url('/star-1.svg')",
                                backgroundSize: "100% 100%"
                            }}
                        >
                            <div className="absolute top-[15px] left-3 rotate-6 font-[number:var(--body-small-font-weight)] text-slate-950 text-[length:var(--body-small-font-size)] leading-[var(--body-small-line-height)] font-body-small tracking-[var(--body-small-letter-spacing)]">
                                無料
                            </div>

                            <div className="absolute top-[34px] left-3.5 rotate-6 font-normal text-slate-950 text-[3px] leading-[4.2px] [font-family:'Inter',Helvetica] tracking-[0]">
                                むりょうくうしょ
                            </div>
                        </div>
                    </div>
                )}
            </Card>
        </Link>
    );
};

// 使用例：
// <OdaiChallenge 
//   title="ToDoサービスをつくろう"
//   difficulty="やさしい"
//   description="グラフィックデザインの基礎から学べるトレーニング"
//   trainingPart={{ visual: "UIビジュアル" }}
//   trainingType="デザイン"
//   isFree={true}
//   buttonText="トレーニングを見る"
//   exerciseId="todo-service"
//   image="public/img-design-odai.png"
//   blurImage="public/image-57-4.png"
// />