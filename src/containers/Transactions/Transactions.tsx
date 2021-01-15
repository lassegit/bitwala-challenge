import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Layout from '../../components/Layout/Layout';
import Table from '../../components/Table/Table';
import formatDate from '../../utils/formatDate';

const TRANSACTIONS_QUERY = gql`
  query($limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
    bitcoin(network: bitcoin) {
      transactions(
        options: { desc: ["block.height", "index"], limit: $limit, offset: $offset }
        date: { since: $from, till: $till }
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
          height
        }
        index
      }
    }
  }
`;

function Transactions() {
  const { data } = useQuery(TRANSACTIONS_QUERY, {
    variables: {
      limit: 10,
      offset: 0,
      from: formatDate(),
      till: null,
      dateFormat: '%Y-%m-%d',
    },
  });

  return (
    <Layout title="Transactions">
      <Table
        thead={
          <tr>
            <td>Timestamp</td>
            <td>index</td>
          </tr>
        }
      >
        {data?.bitcoin?.transactions.map(({ block, index }) => (
          <tr key={index}>
            <td>{block.timestamp.time}</td>
            <td>{index}</td>
          </tr>
        ))}
      </Table>
    </Layout>
  );
}

export default Transactions;
