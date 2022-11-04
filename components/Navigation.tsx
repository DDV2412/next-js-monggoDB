import Link from "next/link";
import { RiMoonFoggyFill } from "react-icons/ri";

export default function Navigation() {
  return (
    <nav className="fixed z-50 left-0 right-0 top-0 h-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-0 flex justify-between items-center min-h-full">
        <div className="font-bold text-xl">UK Project</div>
        <ul className="sm:flex justify-end items-center gap-x-4 hidden">
          <Link
            href="/"
            className="px-5 py-2.5 hover:text-blue-700 font-medium"
          >
            Home
          </Link>
          <Link
            href="/project"
            className="px-5 py-2.5 hover:text-blue-700 font-medium"
          >
            Project
          </Link>
          <Link
            href="/about"
            className="px-5 py-2.5 hover:text-blue-700 font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 hover:text-blue-700 font-medium"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="px-5 py-2.5 hover:text-blue-700 font-medium"
          >
            Blog
          </Link>
          <button className="p-3.5 font-medium ring-2 hover:ring-blue-600 rounded-lg">
            <RiMoonFoggyFill />
          </button>
          <Link
            className="px-5 py-2.5 font-medium ring-2 hover:ring-blue-600 dark:hover:bg-blue-600/30 hover:bg-blue-500/90 hover:text-slate-50 rounded-lg"
            href="/login"
          >
            Login
          </Link>
        </ul>
        <section className="hidden"></section>
      </div>
    </nav>
  );
}
