import { For } from "solid-js";
import { createAsync, query } from "@solidjs/router";

type Book = { id: number; title: string };

const getBooks = query(async () => {

    return [
        { id: 1, title: 'The Great Gatsby' },
        { id: 2, title: 'The Catcher in the Rye' },
        { id: 3, title: 'To Kill a Mockingbird' }
    ] as Book[];
}, "books");

export const route = {
    preload: () => getBooks(),
};

export default function Page() {
    const books = createAsync(() => getBooks());

    return <div>

        <h1>Welcome to Books Page!</h1>

        <div>
            <For each={books()}>{(book) => <li>{book.title}</li>}</For>
        </div>
    </div>;
}