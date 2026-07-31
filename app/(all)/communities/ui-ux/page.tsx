import JoinButton from "@/components/Button";

const UIUX = () => {
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-6">
            <div className="max-w-2xl rounded-xl border p-8 text-center shadow-md">
                <h1 className="text-4xl font-bold">
                    UI/UX Design Community
                </h1>

                <p className="mt-4 text-lg leading-8 text-gray-600">
                    A community for designers and developers interested in creating
                    intuitive, accessible, and visually engaging digital experiences.
                    Share ideas, explore design principles, and learn from others in the
                    field.
                </p>

                <div className="mt-6">
                    <JoinButton />
                </div>
            </div>
        </main>
    );
};

export default UIUX;