import data from "../../master_data/data";

export default function Contact() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 mt-10">Contact</h2>

      <p className="text-zinc-400">
        Email: {data.user.email} <br />
        Phone: {data.user.phone}
      </p>
    </>
  );
}