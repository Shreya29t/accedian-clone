export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 shadow-md">
      <h1 className="text-xl font-bold">Accedian</h1>

      <div className="space-x-6 hidden md:block">
        <a href="#">Products</a>
        <a href="#">Solutions</a>
        <a href="#">Company</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}