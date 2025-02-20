import type { Metadata } from "next";
import "@/styles/css/style.css";
import { Providers } from "./provider";
import { Sidebar } from "@/components/layouts/sidebar";
import NextTopLoader from "nextjs-toploader";
import { PropsWithChildren } from "react";
import { Header } from "@/components/layouts/header";

export const metadata: Metadata = {
  title: {
    template: "%s NextZ | Next.js Dashboard",
    default: "NextZ - Next.js Dashboard",
  },
  description:
    "Next.js admin dashboard toolkit with 200+ templates, UI components, and integrations for fast dashboard development.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <NextTopLoader showSpinner={false} />

          <div className="flex min-h-screen">
            <Sidebar />

            <div className="w-full bg-gray-2 dark:bg-[#020d1a]">
              <Header />

              <main className="isolate mx-auto w-full max-w-screen-2xl overflow-hidden p-4 md:p-6 2xl:p-10">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
