// @ts-nocheck
import { graphql } from 'msw';

export const handlers = [
  graphql.query('BlocksQuery', (res, req, ctx) => {
    const { limit, offset } = req.variables;

    if (!limit || offset) {
      return res(ctx.errors([{ message: 'Missing arguments' }]));
    }

    const data = {
      data: {
        bitcoin: {
          blocks: [
            {
              blockHash: '0000000000000000000728a78b682774a85d43913e674b9703300965745f9569',
              height: 666156,
              timestamp: { time: '2021-01-15 09:59:11', __typename: 'DateTime' },
              __typename: 'BitcoinBlock',
            },
          ],
          __typename: 'Bitcoin',
        },
      },
    };

    return res(ctx.data(data));
  }),
];
