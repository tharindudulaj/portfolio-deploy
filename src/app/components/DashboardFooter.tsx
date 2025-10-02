export default function DashboardFooter() {
  return (
    <footer className="mt-8 w-full border-t border-white/10 bg-black/40 px-6 py-4 text-white/80 backdrop-blur-md">
      <div className="mx-auto w-full max-w-none px-0 text-xs">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-widest">THARINDU</span><br/><br/><br/><br/>
          <span>© {new Date().getFullYear()} Tharindu</span>
        </div>
        <nav className="flex flex-wrap items-center gap-3">
          <a className="hover:text-white" href="#">Home</a>
          <span className="text-white/30">|</span>
          <a className="hover:text-white" href="#">Privacy Policy</a>
          <span className="text-white/30">|</span>
          <a className="hover:text-white" href="#">Terms and Conditions</a>
          <span className="text-white/30">|</span>
          <a className="hover:text-white" href="/contact">Contact us</a>
          <span className="text-white/30">|</span>
          <a className="hover:text-white" href="#">About</a>
        </nav>
        </div>
      </div>
    </footer>
  );
}


