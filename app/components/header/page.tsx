export default function Header() {
  return (
    <nav className="fixed w-full top-0 bg-black/70 backdrop-blur z-50 px-6 py-4 flex justify-between">
      <p className="font-mono text-green-400">$ sahatsawat</p>

      <div className="flex gap-6 text-sm">
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
      </div>
    </nav>
  );
}