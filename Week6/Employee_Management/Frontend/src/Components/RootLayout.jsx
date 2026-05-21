import Header from "./Header"
import { Outlet } from "react-router"

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 md:px-6">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout