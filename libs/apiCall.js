export const getStaticProps = async () => {
  const res = await fetch('http://localhost:1337/api/restaurants?populate=*');
  const data = await res.json();

  return {
    props: { restaurants: data },
  };
};
