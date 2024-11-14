import { getBooks } from "@/data/services/getBooks";



export default async function BooksPage() {
    const books = await getBooks();

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <h1 className="text-4xl font-bold">Books</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
}