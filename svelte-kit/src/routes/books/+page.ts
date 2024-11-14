import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		books: [
			{ id: 1, title: 'The Great Gatsby' },
			{ id: 2, title: 'The Catcher in the Rye' },
			{ id: 3, title: 'To Kill a Mockingbird' }
		]
	};
};
