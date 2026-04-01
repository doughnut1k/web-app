import Link from "next/dist/client/link";

export default function Into() {
  return (
    // components/sections/hero.tsx
    <section className="h-screen flex flex-col justify-center px-6">

      <h1 className="text-5xl font-semibold mt-2">
        Sahatsawat Pueanfoong
      </h1>

      <p className="text-zinc-400 mt-4 max-w-xl">
        Software Engineer specialized in Node.js, Sequelize and Next.js
      </p>
 
      <div className="mt-6 flex gap-4">
        <Link
          href="/pages"
          className="border px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}