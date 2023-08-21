import { UserButton } from "@clerk/nextjs"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-screen">
        <aside className="border-r border-black w-[200px] h-full">
          Mood
        </aside>
        <div className="flex flex-col flex-grow">
          <header className="border-b border-black flex px-4 py-6">
            <div className="flex justify-end w-full">
              <UserButton />
            </div>
          </header>
          <main>
            content
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
