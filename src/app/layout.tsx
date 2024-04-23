import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "@/redux/provider";

export const metadata: Metadata = {
  title: "Mainstack App",
  description: "Mainstack App",
  applicationName: "mainstack app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='font-degular'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
