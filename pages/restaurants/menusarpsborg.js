function Profile() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:1337/api/pizzasarpsborgs')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  );
}
