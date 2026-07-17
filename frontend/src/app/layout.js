import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
});

export const metadata = {
  title: 'TO DO LIST',
  description: 'Junior Full-Stack test task',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${manrope.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col font-sans'>{children}</body>
    </html>
  );
}
