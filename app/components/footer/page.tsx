import data from "../../master_data/data";
export default function Footer() {
  return (
    <footer className="py-10 text-center text-zinc-500 text-sm">
      © 2026 {data.user.firstName} {data.user.lastName}. All rights reserved.
    </footer>
  );
}