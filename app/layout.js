import './globals.css';

export const metadata = {
  title: 'jQuery入門ガイド',
  description: '初心者のためのjQuery基礎学習ガイド',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
} 