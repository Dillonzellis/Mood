import { auth } from "@clerk/nextjs/server"
import Link from "next/link"

export default function Home() {

  const { userId } = auth()
  let href = userId ? '/journal' : '/new-user'

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-prose mx-auto space-y-4">
        <h1 className="text-6xl">The best Journal app, period.</h1>
        <p className="text-2xl text-white/60">This is the best app for tracking your mood throughout your life. All you have to do is be honest.</p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl capitalize">get started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
