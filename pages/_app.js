import '../css/styles.css';
import Layout from '../components/layouts/layouts';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
