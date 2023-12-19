"use client";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/ui/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <head>
          <title>BoAt Headphone and Watches | Best in India</title>
        </head>
        <body className="text-foreground bg-background">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              <main className="max-w-7xl mx-auto px-6 pb-10">{children}</main>
            </ThemeProvider>
        </body>
      </html>
    </QueryClientProvider>
  );
}
