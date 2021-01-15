import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Layout from '../../components/Layout/Layout';
import Table from '../../components/Table/Table';
import Link from '../../components/Link/Link';

const BLOCKS_QUERY = gql`
  query BlocksQuery($limit: Int!, $offset: Int!) {
    bitcoin(network: bitcoin) {
      blocks(options: { desc: "height", limit: $limit, offset: $offset }) {
        blockHash
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
    }
  }
`;

function Blocks() {
  const { data } = useQuery(BLOCKS_QUERY, {
    variables: { limit: 10, offset: 0, type: 'BLOCKS_QUERY' },
  });

  return (
    <Layout title="Blocks">
      <Table
        thead={
          <tr>
            <th>Hash</th>
            <th>Height</th>
            <th>Timestamp</th>
          </tr>
        }
      >
        {data?.bitcoin?.blocks?.map(({ blockHash, height, timestamp }) => (
          <tr key={blockHash}>
            <td>{blockHash}</td>
            <td>
              <Link to={`/blocks/${height}`}>{height}</Link>
            </td>
            <td>{timestamp.time}</td>
          </tr>
        ))}
      </Table>
    </Layout>
  );
}

export default Blocks;
