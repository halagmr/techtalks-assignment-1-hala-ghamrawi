import JoinButton from "@/components/Button";

const WebDevelopment = () => {
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-6">
            <div className="max-w-2xl rounded-xl border p-8 text-center shadow-md">
                <h1 className="text-4xl font-bold">
                    Web Development Community
                </h1>

                <p className="mt-4 text-lg leading-8 text-gray-600">
                    A community for developers interested in building modern websites and
                    web applications. Learn about frontend, backend, and full-stack
                    development while sharing ideas and collaborating with others.
                </p>

                <div className="mt-6">
                    <JoinButton />
                </div>
            </div>
        </main>
    );
};

export default WebDevelopment;