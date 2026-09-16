export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-semibold tracking-tight text-slate-900">
          Portfolio<span className="text-indigo-500">.</span>
        </div>
        <ul className="flex items-center space-x-8 text-sm font-medium text-slate-600">
          <li><a href="/" className="hover:text-indigo-500 transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-indigo-500 transition-colors">Work</a></li>
          <li><a href="#" className="hover:text-indigo-500 transition-colors">About</a></li>
        </ul>
      </div>
    </nav>
  );
}
