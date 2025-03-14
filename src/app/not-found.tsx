import Link from "next/link"

const NotFountPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-50 text-gray-900">
      <h1 className="text-8xl font-bold">404</h1>
      <p className="text-4xl font-medium">Page not found</p>
      <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline">Go to home</Link>
    </div>
  )
}

export default NotFountPage