import Link from "next/link";

const communities = [
    {
        slug: "web-development",
        name: "Web Development",
        description: "Discuss frontend, backend, and full-stack web development.",
    },
    {
        slug: "mobile-development",
        name: "Mobile Development",
        description: "Explore mobile apps, frameworks, and development tools.",
    },
    {
        slug: "ui-ux",
        name: "UI/UX Design",
        description:
            "Share ideas and learn about user interface and experience design.",
    },
];

import React from 'react'

const allcommunities = () => {
    return (
        <main className="px-8 py-12">
            <h1 className="text-4xl font-bold">Communities</h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-600">
                Discover communities where developers can connect, share knowledge,
                discuss their interests, and learn from others with similar passions.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                {communities.map((community) => (
                    <Link
                        key={community.slug}
                        href={`/communities/${community.slug}`}
                        className="rounded-lg border p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-md"
                    >
                        <h2 className="text-xl font-semibold">{community.name}</h2>

                        <p className="mt-2 text-gray-600">
                            {community.description}
                        </p>
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default allcommunities