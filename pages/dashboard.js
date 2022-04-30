import Head from 'next/head';
import { Table } from '@mantine/core';

export default function Home() {
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));
  return (
    <div>
      <Head>
        <title>Husløs Pizza</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <main>
        <Table>
          <thead>
            <tr>
              <th>Element position</th>
              <th>Element name</th>
              <th>Symbol</th>
              <th>Atomic mass</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </main>
    </div>
  );
}