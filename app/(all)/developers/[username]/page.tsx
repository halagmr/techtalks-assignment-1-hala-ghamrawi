const developers = [
    {
        username: "hala",
        role: "Full-Stack Developer",
        bio: "A developer interested in building useful and creative web applications.",
    },
    {
        username: "marwa",
        role: "Frontend Developer",
        bio: "Passionate about creating modern and user-friendly interfaces.",
    },
    {
        username: "sarah",
        role: "UI/UX Designer",
        bio: "I design user-friendly and visually appealing websites.",
    },
];

const DeveloperProfile = async ({
    params,
}: {
    params: Promise<{ username: string }>;
}) => {
    const { username } = await params;

    const developer = developers.find(
        (developer) => developer.username === username
    );

    if (!developer) {
        return <h1>Developer not found</h1>;
    }

    return (
        <main className="flex min-h-[70vh] items-center justify-center px-6">
            <div className="w-full max-w-xl rounded-lg border p-8 text-center shadow-sm">
                <h1 className="text-3xl font-bold">@{developer.username}</h1>

                <h2 className="mt-3 text-xl font-semibold">
                    {developer.role}
                </h2>

                <p className="mt-4 text-gray-600">
                    {developer.bio}
                </p>
            </div>
        </main>
    );
};

export default DeveloperProfile;