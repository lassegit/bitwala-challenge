import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Layout from '../../components/Layout/Layout';
import Table from '../../components/Table/Table';

const BLOCK_QUERY = gql`
  query($height: Int!) {
    bitcoin(network: bitcoin) {
      blocks(height: { is: $height }) {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        medianTime {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        blockHash
        blockSize
        blockStrippedSize
        blockVersion
        blockWeight
        chainwork
        difficulty
        transactionCount
      }
    }
  }
`;

function Block(props: { match: { params: { id: string } } }) {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const { data } = useQuery(BLOCK_QUERY, { variables: { height: Number(id) } });
  const block = data?.bitcoin?.blocks[0] || {};

  return (
    <Layout title="Block attributes">
      <Table
        thead={
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
        }
      >
        <tr>
          <td>timestamp</td>
          <td>{block.timestamp?.time}</td>
        </tr>
        <tr>
          <td>medianTime</td>
          <td>{block.medianTime?.time}</td>
        </tr>
        <tr>
          <td>blockHash</td>
          <td>{block.blockHash}</td>
        </tr>
        <tr>
          <td>blockSize</td>
          <td>{block.blockSize}</td>
        </tr>
        <tr>
          <td>blockStrippedSize</td>
          <td>{block.blockStrippedSize}</td>
        </tr>
        <tr>
          <td>blockVersion</td>
          <td>{block.blockVersion}</td>
        </tr>
        <tr>
          <td>blockWeight</td>
          <td>{block.blockWeight}</td>
        </tr>
        <tr>
          <td>chainwork</td>
          <td>{block.chainwork}</td>
        </tr>
        <tr>
          <td>difficulty</td>
          <td>{block.difficulty}</td>
        </tr>
        <tr>
          <td>transactionCount</td>
          <td>{block.transactionCount}</td>
        </tr>
      </Table>
    </Layout>
  );
}

export default Block;
