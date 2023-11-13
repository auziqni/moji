import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";


export const metadata = {
  title: "MoJi - Monitoring haji",
  description: "Terus bersama mencari berkah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body >
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
