import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "SAAS Template",
  description: "Um template para qualquer projeto SAAS",
};

if (typeof window !== 'undefined') {
  const originalError = console.error;
  console.error = (...args) => {
    if (/hydration/i.test(args[0])) {
      console.log('Detalhes do erro de hidratação:', ...args);
    }
    originalError.apply(console, args);
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} bg-gray-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
