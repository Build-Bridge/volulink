import DashboardLayout from "@/components/Layouts/DashboardLayout";
import "../../globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volulink",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <DashboardLayout>
        {children}
        </DashboardLayout>
        </body>
    </html>
  );
}
