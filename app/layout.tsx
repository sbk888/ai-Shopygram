import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Theme Builder - Design System",
  description: "A unified visual system for Shopify theme experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
