export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">My Portfolio</div>
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">About</a></li>
        <li><a href="#" className="hover:text-gray-300">Experiences</a></li>
      </ul>
    </nav>
  );
}
