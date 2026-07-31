import React from 'react'

const Notfound = () => {
    return (
        <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
            <h1 className="text-7xl font-bold">404</h1>

            <h2 className="mt-4 text-3xl font-semibold">
                Page Not Found
            </h2>

            <p className="mt-4 max-w-md text-lg text-gray-600">
                Sorry, the page you are looking for doesn't exist or may have been
                moved.
            </p>
        </main>
    )
}

export default Notfound