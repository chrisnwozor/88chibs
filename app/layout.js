import { Anton } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "88CHIBS",
  description: "MY CLOTHING",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
        <body className={`${anton.className} antialiased bg-primary`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
