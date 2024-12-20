import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthLayout from "@/components/Layouts/AuthLayout";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volulink",
  description: "Generated by create next app",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthLayout>{children}</AuthLayout>
      </body>
    </html>
  );
}
