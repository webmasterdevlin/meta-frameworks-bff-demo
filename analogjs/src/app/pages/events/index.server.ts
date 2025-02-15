import { PageServerLoad } from '@analogjs/router';

export const load = async ({
  params, // params/queryParams from the request
  req, // H3 Request
  res, // H3 Response handler
  fetch, // internal fetch for direct API calls,
  event, // full request event
}: PageServerLoad) => {
  return [
    { id: 1, title: 'angular oslo meetup' },
    { id: 2, title: 'react oslo meetup' },
    { id: 3, title: 'vue oslo meetup' },
  ];
};
