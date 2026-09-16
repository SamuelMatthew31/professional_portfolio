export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Next.js</h1>
      <p className="text-lg text-gray-600">
        This is a very simple homepage to demonstrate how Next.js architecture works. 
        You can see the Navbar at the top and the Footer at the bottom, which are rendered 
        via the layout.tsx file, wrapping this page.
      </p>
    </div>
  );
}
