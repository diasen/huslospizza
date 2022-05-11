import { useState, useEffect } from 'react';

export default function Menu() {
  const [pizzasarpsborgs, setPizzas] = useState([]);

  async function fetchPizza() {
    const res = await fetch(
      'http://localhost:1337/api/restaurants/1?populate=*'
    );
    const data = await res.json();
    setPizzas(data.data);
  }

  useEffect(() => {
    fetchPizza();
  }, []);

  if (!pizzasarpsborgs) return <p>loading...</p>;

  console.log(pizzasarpsborgs);
  let { id, attributes } = pizzasarpsborgs;

  console.log('pizza', attributes);
  return (
    <div>
      <p>{attributes.name}</p>
      {attributes.menu_sarpsborgs.data.map((elm) => {
        return (
          <div key={elm.id}>
            <p>{elm.attributes.title}</p>
            <p>{elm.attributes.price} nok</p>
            <p>{elm.attributes.allergies}</p>
            <p>{elm.attributes.description}</p>
          </div>
        );
      })}
    </div>
  );
}
