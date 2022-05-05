import Link from 'next/link';

//getStaticProps
export const getStaticProps = async () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';
  const request = await fetch(API_URL);
  const posts = await request.json();
  return { props: { posts } };
};

//route
export default function Home({ posts }) {
  return (
    <div>
      <main>
        {posts.map((post) => (
          <Link key={post.id} href={`posts/${post.id}`}>
            <a>
              <h3>{post.title}</h3>
            </a>
          </Link>
        ))}
      </main>
    </div>
  );
}
