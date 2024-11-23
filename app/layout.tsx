import type { Metadata } from 'next';

import { ClerkProvider } from '@clerk/nextjs';

import '@/app/globals.css';
import { inter } from '@/components/ui/fonts';

import { ThemeProvider } from './../context/ThemeProvider';

export const metadata: Metadata = {
  title: 'Dev Error',
  description:
    'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ClerkProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
