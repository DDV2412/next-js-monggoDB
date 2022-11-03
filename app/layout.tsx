import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
        {children}
      </body>
    </html>
  );
}
