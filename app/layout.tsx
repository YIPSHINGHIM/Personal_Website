import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shing Him Yip | Software Engineer & Product Builder',
  description: 'Shing Him Yip, a software developer at Content Guru, building enterprise real-time platforms, independent SaaS products, and websites for selected clients.',
  icons: { icon: '/favicon.ico' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
