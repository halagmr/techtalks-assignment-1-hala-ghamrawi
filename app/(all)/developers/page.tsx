import Link from "next/link";

const developers = [
    {
        username: "hala",
        name: "Hala Ghamrawi",
        role: "Full-Stack Developer",
    },
    {
        username: "marwa",
        name: "Marwa Restom",
        role: "Frontend Developer",
    },
    {
        username: "sarah",
        name: "Sarah Ali",
        role: "UI/UX Designer",
    },
];

import React from 'react'

const developerslist = () => {
    return (
        <main className="px-8 py-12">
            <h1 className="text-4xl font-bold">Developers</h1>

            <p className="mt-4 max-w-2xl text-lg text-gray-600">
                Discover developers, explore their profiles, and connect with people
                who share your interests in technology.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                {developers.map((developer) => (
                    <Link
                        key={developer.username}
                        href={`/developers/${developer.username}`}
                        className="rounded-lg border p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                        <h2 className="text-xl font-semibold">{developer.name}</h2>

                        <p className="mt-2 text-gray-600">
                            {developer.role}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            @{developer.username}
                        </p>
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default developerslist