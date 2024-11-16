export default async function AboutPage() {
    // react components runs in the by default not unless the "use client" directive is specified.
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <h1 className="text-4xl font-bold">About</h1>
        </div>
    );
}