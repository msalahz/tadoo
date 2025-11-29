export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <h1 className="mb-4 text-4xl font-bold text-gray-800">
        404 - Page Not Found
      </h1>
      <p className="mb-8 text-lg text-gray-600">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Go Back Home
      </a>
    </div>
  )
}
