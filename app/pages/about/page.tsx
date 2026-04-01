import data from "../../master_data/data";

export default function About() {
  return (
    <>
      <h1 className="text-5xl font-semibold mt-2">
        {data.user.firstName} {data.user.lastName}
      </h1>

      <p className="text-zinc-400 mt-4 max-w-xl">
        {data.user.bio}
      </p>

      <h2 className="text-2xl font-semibold mb-4 mt-10">About</h2>

      <p className="text-zinc-400 leading-relaxed">
        {data.user.about}
      </p>
    </>
  );
}