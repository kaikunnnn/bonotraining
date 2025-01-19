import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
    return (
        <header className="flex-col inline-flex h-[96px] w-full items-end justify-start">
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
                    {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                </div>
            </div>
        </header>
    );
};

export default Header;