import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-20">
      <nav className="w-full flex items-center justify-between rounded-none border-b border-white/10 bg-[rgba(0,43,127,0.35)] px-6 py-3 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_8px_24px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-3">
          {/* <div
            className="h-5 w-5 rounded-sm"
            style={{ background: "linear-gradient(135deg, #0040C1, #4CAFFF)" }}
          ></div> */}
          <span className="text-sm font-medium text-white">Portfolio of Tharindu Dulaj</span>
        </Link>
        <div className="flex items-center gap-2 text-sm text-white">
          <Link className="rounded-md px-2 py-1 hover:bg-[rgba(76,175,255,0.15)]" href="/projects">Projects</Link>
          <Link className="rounded-md px-2 py-1 hover:bg-[rgba(76,175,255,0.15)]" href="/about">About</Link>
          <Link className="rounded-md px-2 py-1 hover:bg-[rgba(76,175,255,0.15)]" href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
