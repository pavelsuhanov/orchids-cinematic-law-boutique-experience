import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Lantern } from "@/components/Lantern";

export const metadata: Metadata = {
  title: "Шериев и Партнеры — Адвокатское бюро",
  description: "Элитный юридический бутик в Москве. Квалифицированная юридическая помощь.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased bg-void selection:bg-gold/30">
        <div className="film-grain" />
        <div className="vignette" />
        <Lantern />
        <SmoothScroll>
          <Script
            id="orchids-browser-logs"
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
            strategy="afterInteractive"
            data-orchids-project-id="97429138-41bd-4c47-b801-e303e2b07338"
          />
          <ErrorReporter />
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
          {children}
          <VisualEditsMessenger />
        </SmoothScroll>
      </body>
    </html>
  );
}
