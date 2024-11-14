import { PageServerLoad } from '@analogjs/router';

export const load = async ({
  params, // params/queryParams from the request
  req, // H3 Request
  res, // H3 Response handler
  fetch, // internal fetch for direct API calls,
  event, // full request event
}: PageServerLoad) => {
  return [
    { id: 1, title: 'the great gatsby' },
    { id: 2, title: 'the catcher in the rye' },
    { id: 3, title: 'to kill a mockingbird' },
  ];
};
