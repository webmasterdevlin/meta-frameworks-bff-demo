<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<section>
    <div class="flex flex-col h-screen items-center justify-center">
        <h1 class="text-4xl font-bold">Books</h1>
        <div>
        {#if data.books.length > 0}
        <ul>
            {#each data.books as book}
                <li>{book.title}</li>
            {/each}
        </ul>
        {:else}
            <p>No books found</p>
        {/if}
        </div>
    </div>
</section>  