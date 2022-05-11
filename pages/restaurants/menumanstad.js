function Blog({ pizzaArray }) {
  console.log(pizzaArray);
  return (
    <ul>
      {/* {posts.map((post) => (
        <li>{post.title}</li>
      ))} */}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/api/pizzasarpsborgs');
  const data = await res.json();

  return {
    props: {
      pizzaArray: data,
    },
  };
}

export default Blog;
