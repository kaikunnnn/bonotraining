import { ThemeSwitcher } from "@/components/theme-switcher";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
const NavButton = ({ text }: { text: string }) => (
  <div className="flex items-center justify-start gap-1 px-2 border-[#eda789]">
      <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-full border-2 border-[#0d211d]">
          <div className="text-black text-sm font-bold font-['Rounded Mplus 1c Bold'] leading-[14px] tracking-wide text-center">
              {text}
          </div>
      </div>
  </div>
);
import { Button } from "@/components/ui/button"
import { AnimatedHero } from "@/components/ui/animated-hero";

import "./globals.css";
import MainHeadline from "@/components/layout/headline/MainHeadline";
import ObjectChallenge from "@/components/exercises/Challenges/ObjectChallenge";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <Header />
              <MainHeadline 
                mainTitle={{
                  first: "みんなで",
                  second: "デザトレ"
                }}
                description="SNS情報ばっかり見て肩こわばってない？そうだ！デザイン筋を鍛える旅に出かけようっ！"
                buttonText="使い方を見る"
                
              />
              <div className="w-full flex justify-between gap-8 px-8">
                <ObjectChallenge 
                  title="SNSアプリをつくろう"
                  difficulty="やさしい"
                  description="グラフィックデザインの基礎から学べるトレーニング"
                  trainingPart={{
                    visual: "UIビジュアル"
                  }}
                  trainingType="チャレンジ"
                  isFree={false}
                  buttonText="トレーニングを見る"
                />
                <ObjectChallenge 
                  title="アプリをつくろう"
                  difficulty="やさしい"
                  description="グラフィックデザインの基礎から学べるトレーニング"
                  trainingPart={{
                    visual: "UIビジュアル"
                  }}
                  trainingType="チャレンジ"
                  isFree={false}
                  buttonText="トレーニングを見る"
                />
                <ObjectChallenge 
                  title="SNSアプリをつくろう"
                  difficulty="やさしい"
                  description="グラフィックデザインの基礎から学べるトレーニング"
                  trainingPart={{
                    visual: "UIビジュアル"
                  }}
                  trainingType="チャレンジ"
                  isFree={false}
                  buttonText="トレーニングを見る"
                />
              </div>

              <AnimatedHero />
              
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
