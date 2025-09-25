import Head from 'next/head';
import Layout from '../../components/layout';

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Hi</title>
      </Head>
      <div>
        <p>Welcome to the home page!</p>
      </div>
    </Layout>
  );
}
