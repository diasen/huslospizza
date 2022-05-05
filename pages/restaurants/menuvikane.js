//Using React's useState and useEffect hooks
import { useState, useEffect } from 'react';

export default function Posts() {
  const [pizzasarpsborgs, setPosts] = useState([]);

  async function fetchPosts() {
    const res = await fetch('http://localhost:1337/api/pizzasarpsborgs');
    const data = await res.json();
    setPosts(data.data);
    const newarray = data.data;
    console.log(newarray);

    const reformattedArray = newarray.map(({ id, attributes }) => ({
      [id]: attributes,
    }));
    console.log(reformattedArray);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {pizzasarpsborgs.map((post) => (
        <p key={post.id}>{post.id}</p>
      ))}
    </div>
  );
}
