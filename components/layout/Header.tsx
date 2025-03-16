"use client"

import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex-col inline-flex h-[96px] w-full items-end justify-start fixed top-0 z-50 ">
            {/* トップバー */}
            <div className="flex flex-col items-end justify-start h-6 px-6 self-stretch gap-2.5">
                <Link
                    href="https://bo-no.design"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="inline-flex items-center justify-start gap-1 pl-3 pr-2 py-1 bg-[#0d0f18] rounded-bl-[10px] rounded-br-[10px] border border-white/10">
                        <div className="text-white text-[10.50px] font-bold font-['Futura'] leading-3 tracking-wide text-center">
                            BONO
                        </div>
                        <div className="w-4 h-4 relative overflow-hidden" />
                    </div>
                </Link>
            </div>

            {/* メインヘッダー */}
            <div className="inline-flex items-center justify-between h-20 px-5 self-stretch">
                {/* 左側 */}
                <div className="Left flex items-center justify-start w-1/6">
                    <Button
                        asChild
                        size="sm"
                        variant="outline"
                        disabled
                        className="opacity-75 cursor-none pointer-events-none"
                    >
                        <Link href="/sign-in">遊び方</Link>
                    </Button>
                </div>

                {/* 中央 */}
                <div className="Center flex flex-col items-center justify-center w-1/6">
                    <Link href="/">
                        <div className="inline-flex items-center justify-center">
                            <div className="text-black text-xl font-bold font-['Futura'] leading-none tracking-wide text-center">
                                BONO
                            </div>
                        </div>
                        <div className="text-[#666666] text-[8px] font-bold font-['Futura'] leading-[8px] tracking-wide text-center">
                            TRAINING
                        </div>
                    </Link>
                </div>

                {/* 右側 */}
                <div className="Right flex items-center justify-end w-1/6">
                    {/* デスクトップ表示 */}
                    <div className="hidden md:flex gap-2">
                        <Button asChild size="sm" variant="outline">
                            <Link href="/sign-in">ログイン</Link>
                        </Button>
                        <Button asChild size="sm">
                            <Link href="/sign-up">はじめる</Link>
                        </Button>
                    </div>

                    {/* モバイル表示 - ハンバーガーメニュー */}
                    <div className="relative md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="relative z-50"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>

                        {/* ドロップダウンメニュー */}
                        <div
                            className={cn(
                                "absolute right-0 top-12 w-64 bg-background border rounded-lg shadow-lg p-4",
                                "transition-all duration-200 ease-in-out",
                                isMenuOpen
                                    ? "opacity-100 visible translate-y-0"
                                    : "opacity-0 invisible -translate-y-2"
                            )}
                        >
                            <div className="flex flex-col gap-2">
                                <Button asChild size="sm" variant="outline">
                                    <Link href="/sign-in">ログイン</Link>
                                </Button>
                                <Button asChild size="sm">
                                    <Link href="/sign-up">はじめる</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;