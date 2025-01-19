import { ThemeSwitcher } from "@/components/theme-switcher";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button"

import "./globals.css";

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
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold">ボタンデモ</h2>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl">デフォルトサイズ</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="default">Default</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl">小サイズ</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="default" size="sm">Default</Button>
                      <Button variant="destructive" size="sm">Destructive</Button>
                      <Button variant="outline" size="sm">Outline</Button>
                      <Button variant="secondary" size="sm">Secondary</Button>
                      <Button variant="ghost" size="sm">Ghost</Button>
                      <Button variant="link" size="sm">Link</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl">大サイズ</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="default" size="lg">Default</Button>
                      <Button variant="destructive" size="lg">Destructive</Button>
                      <Button variant="outline" size="lg">Outline</Button>
                      <Button variant="secondary" size="lg">Secondary</Button>
                      <Button variant="ghost" size="lg">Ghost</Button>
                      <Button variant="link" size="lg">Link</Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl">アイコンサイズ</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="default" size="icon">📍</Button>
                      <Button variant="destructive" size="icon">📍</Button>
                      <Button variant="outline" size="icon">📍</Button>
                      <Button variant="secondary" size="icon">📍</Button>
                      <Button variant="ghost" size="icon">📍</Button>
                      <Button variant="link" size="icon">📍</Button>
                    </div>
                  </div>
                </div>
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
