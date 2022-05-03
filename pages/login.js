import Head from 'next/head';
import axios from 'axios';
import { BASE_URL } from '../config/config';
import Authentication from '../components/login/authentication';

axios.get(BASE_URL).then((response) => {
  console.log(response.data.data);
});

export default function Login(restaurants) {
  return (
    <div>
      <Head>
        <title>Log in Husløs pizza</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <main>
        <Authentication />
      </main>
    </div>
  );
}
