import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/journal",
    label: "Journal",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-screen">
        <aside className="border-r border-black w-[200px] h-full">
          <div>Mood</div>
          <ul>
            {links.map((link) => (
              <li key={link.href} className="px-2 py-6 text-xl">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </aside>

        <div className="flex flex-col flex-grow">
          <header className="border-b border-black flex px-4 py-6">
            <div className="flex justify-end w-full">
              <UserButton />
            </div>
          </header>
          <main className="h-full">{children}</main>
        </div>
      </div>
    </div>
  );
}
