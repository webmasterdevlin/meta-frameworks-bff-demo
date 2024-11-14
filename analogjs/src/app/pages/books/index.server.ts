import { PageServerLoad } from '@analogjs/router';

export const load = async ({
  params, // params/queryParams from the request
  req, // H3 Request
  res, // H3 Response handler
  fetch, // internal fetch for direct API calls,
  event, // full request event
}: PageServerLoad) => {
  return [
    { id: 1, title: 'The Great Gatsby' },
    { id: 2, title: 'The Catcher in the Rye' },
    { id: 3, title: 'To Kill a Mockingbird' },
  ];
};
