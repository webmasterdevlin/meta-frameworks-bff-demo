import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
    console.log("server code");
    return [
        { id: 1, title: "The Great Gatsby" },
        { id: 2, title: "The Catcher in the Rye" },
        { id: 3, title: "To Kill a Mockingbird" },
    ] // coming from a database using an ORM
}

export default function Books() {

    const data = useLoaderData<{ id: number, title: string }[]>();
    console.log("client code");

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <h1 className="text-4xl font-bold">Books</h1>

            <ul>
                {data.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
}