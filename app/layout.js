import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className="dark:bg-slate-900 dark:text-slate-50 bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
