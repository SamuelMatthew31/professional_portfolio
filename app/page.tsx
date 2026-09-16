export default function Home() {
  return (
    <div className="w-full flex flex-col items-center text-center space-y-8 py-20">
      {/* A soft pill-shaped badge */}
      <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600">
        Available for new opportunities ✨
      </div>
      
      {/* Main Hero Header */}
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 max-w-3xl leading-tight">
        Crafting digital experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">precision and care</span>.
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
        I'm a software developer focused on building clean, user-friendly, and modern web applications. 
        Welcome to my simplified Next.js portfolio.
      </p>
      
      {/* Call to action buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
        <a href="#" className="rounded-full bg-slate-900 px-8 py-3.5 text-sm font-medium text-white shadow-md shadow-slate-900/10 hover:bg-slate-800 hover:shadow-lg transition-all active:scale-95">
          View My Work
        </a>
        <a href="#" className="rounded-full bg-white border border-slate-200 px-8 py-3.5 text-sm font-medium text-slate-700 shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-all active:scale-95">
          Get in Touch
        </a>
      </div>
    </div>
  );
}
