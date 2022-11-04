export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="dark:bg-slate-900 dark:text-slate-50 bg-slate-50 text-slate-900 min-h-screen">
      {children}
    </main>
  );
}
