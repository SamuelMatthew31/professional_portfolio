export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
          <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-slate-900 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
